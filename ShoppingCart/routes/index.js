var express = require('express');
var router = express.Router();

/* GET home page. */
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
  ]
  res.render('index', { products, admin:false });
});

module.exports = router;
