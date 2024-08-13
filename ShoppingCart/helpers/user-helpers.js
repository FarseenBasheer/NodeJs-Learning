var db=require('../config/connection');
var collection=require('../config/collections')
const bcrypt=require('bcrypt')
var { ObjectId } = require('mongodb');
const { parse } = require('handlebars');

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
        let prodObj={
            item:new ObjectId(prodId),
            quantity:1
        }
        return new Promise(async(resolve,reject)=>{
            let userCart=await db.get().collection(collection.CART_COLLECTION).findOne({user:new ObjectId(userId)})
            if(userCart){
                let prodExist=userCart.products.findIndex(product=>product.item==prodId)
                // console.log(prodExist)
                if(prodExist!=-1){
                    db.get().collection(collection.CART_COLLECTION)
                    .updateOne({user:new ObjectId(userId),'products.item':new ObjectId(prodId)},
                    {
                        $inc:{'products.$.quantity':1}
                    }
                    ).then(()=>{
                        resolve()
                    })
                }else{
                    db.get().collection(collection.CART_COLLECTION).updateOne({user:new ObjectId(userId)},
                    {
                        $push:{products:prodObj}
                    }).then((response)=>{
                        resolve()
                    })
                }
            }else{
                let cartObj={
                    user:new ObjectId(userId),
                    products:[prodObj]
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
                    $unwind:'$products'
                },
                {
                    $project:{
                        item:'$products.item',
                        quantity:'$products.quantity'
                    }
                },
                {
                    $lookup:{
                        from:collection.PRODUCT_COLLECTION,
                        localField:'item',
                        foreignField:'_id',
                        as:'product'
                    }
                },
                {
                    $project:{
                        item:1,quantity:1,product:{$arrayElemAt:['$product',0]}
                    }
                }
                // {
                //     $lookup:{
                //         from:collection.PRODUCT_COLLECTION,
                //         let:{prodList:'$products'},
                //         pipeline:[
                //             {
                //                 $match:{
                //                     $expr:{
                //                         // $in:['$_id','$prodList']
                //                         $in:['$_id','$$prodList']
                //                     }
                //                 }
                //             }
                //         ],
                //         as:'cartItems'
                //     }
                // }
            ]).toArray()
            // console.log(cartItems[0].products)
            // console.log(cartItems)
            resolve(cartItems)
        })
    },
    getCartCount:(userId)=>{
        return new Promise(async(resolve,reject)=>{
            let count=0
            let cart=await db.get().collection(collection.CART_COLLECTION).findOne({user:new ObjectId(userId)})
            if(cart){
                count=cart.products.length
            }
            resolve(count)
        })
    },
    // changeProductQuantity:({cartId,prodId,count})=>{
    changeProductQuantity:(details)=>{
        details.count=parseInt(details.count)
        details.quantity=parseInt(details.quantity)
        // console.log(cartId,prodId)
        return new Promise((resolve,reject)=>{
            if(details.count==-1 && details.quantity==1){
                db.get().collection(collection.CART_COLLECTION)
                .updateOne({_id:new ObjectId(details.cart)},
                {
                    $pull:{products:{item:new ObjectId(details.product)}}
                }
                ).then((response)=>{
                    resolve({removeProduct:true})
                })
            }else{
                db.get().collection(collection.CART_COLLECTION)
                .updateOne({_id:new ObjectId(details.cart),'products.item':new ObjectId(details.product)},
                {
                    $inc:{'products.$.quantity':details.count}
                }
                ).then((response)=>{
                    // console.log(response)
                    resolve(true)
                })
            }
        })
    },
    removeProductFromCart: (details) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.CART_COLLECTION)
                .updateOne(
                    { _id: new ObjectId(details.cart) },
                    { $pull: { products: { item: new ObjectId(details.product) } } }
                ).then((response) => {
                    resolve({ removeProduct: true });
                }).catch((err) => {
                    reject(err);
                });
        });
    },
    getTotalAmount:(userId)=>{
        return new Promise(async(resolve,reject)=>{
            let total=await db.get().collection(collection.CART_COLLECTION).aggregate([
                {
                    $match:{user:new ObjectId(userId)},    
                },
                {
                    $unwind:'$products'
                },
                {
                    $project:{
                        item:'$products.item',
                        quantity:'$products.quantity'
                    }
                },
                {
                    $lookup:{
                        from:collection.PRODUCT_COLLECTION,
                        localField:'item',
                        foreignField:'_id',
                        as:'product'
                    }
                },
                {
                    $project:{
                        item:1,quantity:1,product:{$arrayElemAt:['$product',0]}
                    }
                },
                {
                    $group:{
                        _id:null,
                        total:{
                            $sum:{$multiply:['$quantity',{$toDouble: '$product.Price'}]}
                        }
                    }
                }
            ]).toArray()
            // console.log(total[0].total)
            resolve(total[0].total)
        })
    }
    
}