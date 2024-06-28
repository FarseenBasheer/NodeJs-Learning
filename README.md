To install readline-sync
npm install readline-sync
One time install in one project. No need to install everytime in a project
And we can use the functions from readline-sync using require('readline-sync') in js files.

To run node files
node filename
eg: node hello.js

To know the node version
node -v

Create a function
name of file: function sample.js
To run the function
node function\ sample.js


Create an array
File name = array sample.js

ES6 - ECMAScript 6

var - function scope
let - block scope

default_parameter
function hello(num1 = 100,num2){
    console.log(num1+num2);
}
hello(undefined,20);
here if we are calling the function like this, num1 will take the default parameter as 100.

class
extends

class Hello extends Sample
Then the constructor of class Hello should call super()
The derived class should call super to get the base class

npm - node packaging manager
We store modules/libraries in
https://www.npmjs.com/

if we found any libraries that we need in this site. Search for uppercase,
we can use that module in our file. If we are doing this for the first time(getting libraries in our project file):
npm init
then will ask for project name. Click enter for now to make deafult name for project.
then npm install library name
no need of save. Save is used in the older versions

we will push only the package.json and package-lock.json. Will not push the node modules.
Then when running the project run 'npm install' will install all the dependencies.

Server with port using http. You can access it in http://localhost:port_number/

2 arguments passed - res and req
req - request object contains the data of the system that the user uses to call that server
res contains the response of that request

The changes made in the file will not work until the running port is closed in the terminal using ctrl+C. After that inorder to reflect the changes that we made, run the file again using node filename. When nothing is running in the terminal, we can't access that site.

http://www.facebook.com
here facebook.com is the host

localhost:7000/ this is the host in our case (local)

req.url === '/' -> It means it will be the host itself. localhost:7000

http method in web request
GET - To get data by giving a request to web. From client side give request to server and get data
POST - To send data to server
PUT - To send data and update
DELETE - Delete data

Form action method. If we didn't give method in form, GET is used in default. Using GET will show the data in the url like ?fname=Farseen. So we send using POST.