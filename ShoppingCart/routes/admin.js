var express = require('express');
const { route } = require('./admin');
var router = express.Router();
var productHelpers= require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name: "IPHONE 11",
      category: "mobile",
      description: "This is a good phone",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAYqQmgIlElczj3o8gOy27sWgC_-CkbHqmA&s"
    },
    {
      name: "One Plus 7T",
      category: "mobile",
      description: "This is a good phone",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yXNjbXvoGoyxyfHfnWlDnhCZ5unS2ewz2A&s"
    },
    {
      name: "OOPO 10X",
      category: "mobile",
      description: "This is a good phone",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJjHeX8s-9YC5RZQsCsgQ6pXNGv0huD42Xw&s"
    },
    {
      name: "MI Note 9 Pro",
      category: "mobile",
      description: "This is a good phone",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhgrw1vn4uQtGdMUNjiIBazcnkVUN1emHdg&s"
    },
  ];
  res.render('admin/view-products', {admin:true, products});
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

module.exports = router;
