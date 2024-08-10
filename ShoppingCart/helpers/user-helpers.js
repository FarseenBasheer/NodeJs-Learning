var db=require('../config/connection');
var collection=require('../config/collections')
const bcrypt=require('bcrypt')
var { ObjectId } = require('mongodb');

module.exports={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.Password=await bcrypt.hash(userData.Password, 10) // saltOrRounds = give 10 as default value.
            let result = await db.get().collection(collection.USER_COLLECTION).insertOne(userData);
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({ _id:new ObjectId(result.insertedId) });
            // resolve(result.insertedId)
            resolve(user)
        })
    },
    doLogin:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginStatus = false
            let response = {}
            let user=await db.get().collection(collection.USER_COLLECTION).findOne({Email:userData.Email})
            if(user){
                bcrypt.compare(userData.Password, user.Password).then((status)=>{
                    if(status){
                        console.log('login successful')
                        response.user=user
                        response.status=true
                        resolve(response)
                    }else{
                        console.log('login failed')
                        resolve({status:false})
                    }
                })
            }else{
                console.log('login failed')
                resolve({status:false})
            }
        })
    },
    addToCart:(prodId,userId)=>{
        return new Promise(async(resolve,reject)=>{
            let userCart=await db.get().collection(collection.CART_COLLECTION).findOne({user:new ObjectId(userId)})
            if(userCart){
                db.get().collection(collection.CART_COLLECTION).updateOne({user:new ObjectId(userId)},
                {
                    $push:{products:new ObjectId(prodId)}
                }).then((response)=>{
                    resolve()
                })
            }else{
                let cartObj={
                    user:new ObjectId(userId),
                    products:[new ObjectId(prodId)]
                }
                db.get().collection(collection.CART_COLLECTION).insertOne(cartObj).then((response)=>{
                    resolve()
                })
            }
        })
    },
    getCartProducts:(userId)=>{
        return new Promise(async(resolve,reject)=>{
            let cartItems=await db.get().collection(collection.CART_COLLECTION).aggregate([
                {
                    $match:{user:new ObjectId(userId)},    
                },
                {
                    $lookup:{
                        from:collection.PRODUCT_COLLECTION,
                        let:{prodList:'$products'},
                        pipeline:[
                            {
                                $match:{
                                    $expr:{
                                        // $in:['$_id','$prodList']
                                        $in:['$_id','$$prodList']
                                    }
                                }
                            }
                        ],
                        as:'cartItems'
                    }
                }
            ]).toArray()
            resolve(cartItems[0].cartItems)
        })
    }
}