Express generator: Used to easily create structured projects in Node js
https://expressjs.com/en/starter/generator.html
command to run: In older version npm is used instead of npx
npx express-generator --hbs
Using npx we can directly use that. install then again command not needed.
We added hbs here which is handlebars which we will learn later - template generator

after installing npm generator run
npm install
if prompted run npm audit fix

Now we can run the project with www in bin. We haven't created a file yet. www is actually a js file.
we can run like this: node bin/www
But we have npm so we will not run like this. We have 
"scripts": {
    "start": "node ./bin/www"
  } in package.json.
  So we run
  npm start
  localhost:3000 port by default

  app.js - main js file. basic main control

  Different template engines are hbs(we use), ejs, pug - different syntax - for dynamic wesite. convert into html.

  public - frontend related -images, stylesheet, js

  views - hbs. template engine

  routes - /url . different routes & pages

  package-lock.json - from where did the library loaded. it's versions. which can be ignored. we need only package.json

  We will not edit anything in www. But we will edit app.jss as it is our route.

  res.render - render function will check the views folder and took the file name without hbs ike 'index'. Because we already specified the template engine.

  in index.hbs syntax is {{-------}}

{{#each values}}
this will work as a loop
{{/each}}

The padding in localhost:3000 comes from layout.hbs where the stylesheets, head, doctype, body etc given.

{{{body}}} - This part will be populated with content.

{{{---}}} - refer a page
{{---}} - refer a variable

-------------------------------------------------------------------------------------------------------------------

MongoDB

SQL - Structures query laguage. Like tables - like excel sheet
No SQL - Much more faster than SQL. It store like objects. like key value pair. If no value, no key.

In MongoDB, a set of similar category - users, product - collection.
Farseen, age, place, details - each group like these details is called document. Each user a document.

Install mongoDB using the link below in ubuntu - community edition:
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/


In terminal,
sudo systemctl start mongod
if this error- Failed to start mongod.service: Unit mongod.service not found. run
sudo systemctl daemon-reload
then start.
Check status using
sudo systemctl status mongod

Start working on using
mongosh
> this will come
db will give test

use sample -> switched to db sample. If there is no db names sample. use will create a db named sample. Or if already a db exist, it will enter into the existing db.
show dbs ->sample will not be there. Because sample have no collection and content.
db ->sample
db.createCollection('user')
show dbs
exit

mongosh
show dbs
use sample
show dbs
show collections -> user
To create a document inside collection,
db.user.insert({name: "Farseen", place: "Mathilakam"}) -> This is deprecated so we can use insertOne like db.user.insertOne({name: "Farseen", place: "Mathilakam"})
db.user.find()
db.user.find().pretty() -> Make it visible pretty

MongoDB queries can be learnt separately

Collection can be created without collection product:
db.product.insert({title: "Canon"})
show collections
Drop database -> remove db
db.dropDatabase()
show dbs

use sample
db.user.insert({name:"Farseen"})
To remove collection:
db.user.drop()
show collections

db.user.insertMany([{name:"Farseen", place:"Mathilakam"},{name:"Fayees", place:"Kodungallur", age:19}])
db.user.find().pretty()
db.user.findOne()

Filter user with place
db.user.find({place:"Mathilakam"})

db.user.insert({name:"Fasil", age: 27})
db.user.find().pretty()
db.user.find({age: 27})
db.user.find({age: {$gt:20}}).pretty()
gt- greater than
lt-less than
you can find similar in projections in mongodb

db.user.find({age: {$lt:20}})
db.user.find({age: {$gt:20}}, {name:1}) -> id and name display
b.user.find({age: {$gt:20}}, {name:1, _id:0}).pretty() ->name only display
Toggle the display using 0 and 1

To update data:
db.user.update({name:"Farseen"},{$set:{name:"Appus"}})
db.user.find().pretty()

To delete document
db.user.remove({name:"Fayees"})
db.user.find().pretty()

