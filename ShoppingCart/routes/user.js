var express = require('express');
var router = express.Router();
var productHelpers= require('../helpers/product-helpers')
const userHelpers=require('../helpers/user-helpers');
const { route } = require('./user');
const verifyLogin=(req,res,next)=>{
  if(req.session.loggedIn){
    next()
  }else{
    res.redirect('/login')
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.session.user
  console.log(user)
  productHelpers.getAllProducts().then((products)=>{
    // console.log(products);
    res.render('user/view-products', {admin:false, products, user});
  });
  // res.render('index', { products, admin:false });
});

router.get('/login', (req,res)=>{
  console.log(req.session.loggedIn)
  if(req.session.loggedIn){
    console.log('here')
    res.redirect('/')
  }else{

    console.log('hi')
    res.set('Cache-Control', 'no-store');
    res.render('user/login',{"loginError":req.session.loginError})
    req.session.loginError=false
  }
})

router.get('/signup', (req,res)=>{
  res.render('user/signup')
})

router.post('/signup',(req,res)=>{
  userHelpers.doSignup(req.body).then((response)=>{
    console.log('Farseen')
    console.log(response);
  })
})

router.post('/login',(req, res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      req.session.loggedIn=true
      req.session.user=response.user
      res.redirect('/')
    }else{
      // req.session.loginError=true
      req.session.loginError="Invalid username or password"
      res.redirect('/login')
    }
  })
})

router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})

router.get('/cart',verifyLogin,(req,res)=>{
  // if(req.session.loggedIn)
  res.render('user/cart')
})

module.exports = router;
