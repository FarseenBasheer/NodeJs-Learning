Shopping Cart Project

Bootstrap:
https://getbootstrap.com/docs/4.0/getting-started/introduction/

MongoDB W3Schools:
https://www.w3schools.com/mongodb/index.php

hns defined in app.js
npm install express-handlebars

For image file upload,
add enctype="multipart/form-data" in form

npm i express-fileupload

To view database: robomongo - mongodb GUI can be installed from:
https://studio3t.com/download/


When npm start, [nodemon] starting `node ./bin/www nodemon`
[nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached, watch '/home/terrific/Desktop/Nodejs/ShoppingCart'
terrific@terrific-minds:~/Desktop/Nodejs/ShoppingCart$ sudo sysctl fs.inotify.max_user_watches=582222 && sudo sysctl -p
[sudo] password for terrific: 
fs.inotify.max_user_watches = 582222
vm.swappiness = 10
Fix by running below command
sudo sysctl fs.inotify.max_user_watches=582222 && sudo sysctl -p

To encrypt passwords, there is an npm module
search
bcrypt npm
npm install bcrypt

Login session
search express session
Install using:
npm install express-session

Didn't install below. But can be installed.
I installed below module t prevent going to login page from browser back button
npm i nocache

Here, for guest users there will be no cart, they will be redirected to login page. Not real site.

in the header, we can add bootstrap badge on cart icon

Search:
project array element mongodb

json- javascript object notation