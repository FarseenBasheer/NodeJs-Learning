var express = require('express');
const { route } = require('./admin');
var router = express.Router();
var productHelpers= require('../helpers/product-helpers');
const { ObjectId } = require('mongodb');

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    // console.log(products);
    res.render('admin/view-products', {admin:true, products});
  });
});

router.get('/add-product', function(req, res){
  res.render('admin/add-product', {admin: true})
})

router.post('/add-product',(req,res)=>{
  // console.log(req.body);
  // console.log(req.files.Image);
  productHelpers.addProduct(req.body, (id)=>{
    let image= req.files.Image
    // console.log(id)
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-product')
      }else{
        console.log(err)
      }
    })
  });
})

router.get('/delete-product/:id',(req,res)=>{
  // router.get('/delete-product/',(req,res)=>{
  let prodId=req.params.id
  // let prodId=req.query.id
  // let prodName=req.query.name
  // console.log(prodId)
  // console.log(prodName)
  productHelpers.deleteProduct(prodId).then((response)=>{
    res.redirect('/admin/')
  })

})

module.exports = router;
