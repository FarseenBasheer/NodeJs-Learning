npx express-generator --hbs
npm install
npm audit fix
npm audit fix --force

Search google: handlebars signup form sample
and find one design for easiness
eg: https://github.com/archer920/NodeIntroduction/blob/master/views/layout.hbs

npm start
localhost:3000

npm install nodemon - js change - npm restart automatically
sudo npm install nodemon -g -> globally

in package.json change this     "start": "node ./bin/www"
to     "start": "nodemon ./bin/www"

npm start

Search in google:
mongodb clent sample node
https://mongodb.github.io/node-mongodb-native/api-articles/nodekoarticle1.html

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

To make a connection between node js and mongo db, we need a driver for that. The native driver of mongo db is more speeder than mongoose driver.
npm install mongodb