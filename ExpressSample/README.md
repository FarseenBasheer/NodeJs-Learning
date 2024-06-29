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