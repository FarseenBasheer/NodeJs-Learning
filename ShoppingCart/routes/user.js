var express = require('express');
var router = express.Router();
var productHelpers= require('../helpers/product-helpers')
const userHelpers=require('../helpers/user-helpers');
const { route } = require('./user');
const { response } = require('../app');
const verifyLogin=(req,res,next)=>{
  if(req.session.loggedIn){
    next()
  }else{
    res.redirect('/login')
  }
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  let user=req.session.user
  console.log(user)
  let cartCount=null
  if(req.session.user){
    cartCount=await userHelpers.getCartCount(req.session.user._id)
  }
  productHelpers.getAllProducts().then((products)=>{
    // console.log(products);
    res.render('user/view-products', {admin:false, products, user,cartCount});
  });
  // res.render('index', { products, admin:false });
});

router.get('/login', (req,res)=>{
  // console.log(req.session.loggedIn)
  if(req.session.loggedIn){
    res.redirect('/')
  }else{
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
    // console.log(response);
    req.session.loggedIn=true
    req.session.user=response
    res.redirect('/')
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

router.get('/cart',verifyLogin,async(req,res)=>{
  let products=await userHelpers.getCartProducts(req.session.user._id)
  let productRemoved = req.session.productRemoved;
  req.session.productRemoved = false;
  // console.log(products)
  // if(req.session.loggedIn)
  res.render('user/cart',{products,user:req.session.user, productRemoved})
})

// router.get('/add-to-cart/:id',verifyLogin,(req,res)=>{
router.get('/add-to-cart/:id',(req,res)=>{
  // console.log("api call")
  userHelpers.addToCart(req.params.id, req.session.user._id).then(()=>{
    // res.redirect('/')
    res.json({status:true})
  })
})

router.post('/change-product-quantity',(req,res,next)=>{
  // console.log(req.body)
  userHelpers.changeProductQuantity(req.body).then((response)=>{
    res.json(response)
  })
})

router.get('/remove-product-from-cart/:cartId/:productId', (req, res, next) => {
  const cartId = req.params.cartId;
  const productId = req.params.productId;
  userHelpers.removeProductFromCart({ cart: cartId, product: productId }).then((response) => {
    req.session.productRemoved = true;
    res.redirect('/cart');
  }).catch((err) => {
    console.error(err);
    res.redirect('/cart');
  });
});

router.get('/place-order',verifyLogin,async(req,res)=>{
  let total=await userHelpers.getTotalAmount(req.session.user._id)
  res.render('user/place-order',{total})
})


module.exports = router;
