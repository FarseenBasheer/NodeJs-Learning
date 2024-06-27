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