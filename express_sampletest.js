const express=require('express')
const path=require('path');
const router=express.Router();
const bodyParser=require('body-parser');


const app=express();

// app.use(function(req, res, next){
//     console.log('Start');
//     next();
// })

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/signup', function(req, res, next){
    res.sendFile(path.join(__dirname,'signup1.html'));
    console.log('middle');
    next();
})

app.post('/signup',function(req,res){
    console.log('Reached');
    res.send(`
	<h1>Registration Successful :-)</h1>
	<p>Name: ${req.body.fname}</p>
	<p>Username: ${req.body.lname}</p>
	<p>Contact: ${req.body.mobile}</p>`);
// };
    
    // console.log(req.body.fname);
    // res.sendFile(path.join(__dirname,'express_sampletest.html'));
})

app.use(function(req, res){
    console.log('end');
})

app.get('/about',(req,res)=>res.send('About')
)

app.listen(3000, function(){
    console.log('Server started');
})