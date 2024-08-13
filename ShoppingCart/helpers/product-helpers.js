var db=require('../config/connection');
var collection=require('../config/collections')
// var objectId=require('mongodb').ObjectID
var { ObjectId } = require('mongodb');
const { response } = require('../app');

module.exports={
    addProduct:(product,callback)=>{
        // console.log(product);
        db.get().collection('product').insertOne(product).then((data)=>{
            // console.log(data)
            // callback(data.ops[0]._id);
            callback(data.insertedId)
        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products= await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    },
    deleteProduct:(prodId)=>{
        return new Promise((resolve, reject)=>{
            // console.log(prodId)
            // console.log(new ObjectId(prodId))
            db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id:new ObjectId(prodId)}).then((response)=>{
                // console.log(response)
                resolve(response)
            })
        })
    },
    getProductDetails:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id:new ObjectId(prodId)}).then((product)=>{
                resolve(product)
            })
        })
    },
    updateProduct:(prodId, prodDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION)
            .updateOne({_id:new ObjectId(prodId)},{
                $set:{
                    Name:prodDetails.Name,
                    Description:prodDetails.Description,
                    Price:prodDetails.Price,
                    Category:prodDetails.Category
                }
            }).then((response)=>{
                resolve()
            })
        })
    }
}