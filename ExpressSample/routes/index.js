var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values=["Farseen", "Fayees", "Fasil", "Basheer", "Balkis"];

  // const person={name:"Farseen", comments:{comment: "This is a sample comment", date: "30-06-2024"}}

  const person={name:"Farseen", comments:{comment: "This is a sample comment", date: "30-06-2024"}}

  // const person={name:"Farseen", admin: true}

  // const person={name:"Farseen", admin: false}


  // res.render('index', {values});
  res.render('index', {person});
  // res.render('index', {title: "Farseen"});

});

module.exports = router;
