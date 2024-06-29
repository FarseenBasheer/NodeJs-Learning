const express=require('express') // This is now used widely. Because the value is not changed frequently
const path=require('path');

const app=express(); // We start like this. Create an object like this first

app.use(function(req, res, next){ // middleware. when a web request come in between giving a response, app.use works. Don't forget to give next argument and use it.
    console.log('Start');
    next(); // if this next is not given, it will not move to next action and giving response. it will stop here.
})

// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname,'signup.html'))
// })

app.get('/signup', function(req, res, next){
    res.sendFile(path.join(__dirname,'signup1.html'));
    console.log('middle');
    next();
})

app.post('/signup',function(req,res){
    console.log('Reached');
    // req.params.
    // req.body.
    res.send('account created');
})

app.use(function(req, res){ // After all web requests processed, before giving it as a response this works.
    console.log('end');
})

app.get('/about',(req,res)=>res.send('About')
)

// app.post()

app.listen(3000, function(){

    // console.log(__filename); ///home/terrific/Desktop/Nodejs/express_sample.js - file path with file name
    // console.log(__dirname); // /home/terrific/Desktop/Nodejs - directory path
    console.log('Server started');
}) // port, function