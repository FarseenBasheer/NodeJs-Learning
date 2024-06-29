const express=require('express')
const path=require('path');
const router=express.Router();
const bodyParser=require('body-parser');


const app=express();

// app.use(function(req, res, next){
//     console.log('Start');
//     next();
// })
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/signup', function(req, res, next){
    res.sendFile(path.join(__dirname,'signup1.html'));
    console.log('middle');
    next();
})

app.post('/signup',function(req,res){
    console.log('Reached');
    res.render(__dirname + "/express_sampletest", {name:req.body.fname, lname:req.body.lname, mobile:req.body.mobile});
    // console.log(req.body.fname);
    // res.sendFile(path.join(__dirname,'express_sampletest.html'));
})

app.use('/signup',function(req, res){
    // res.render('express_sampletest.html', { fname: res.body.fname });
    console.log('end');
})

app.get('/about',(req,res)=>res.send('About')
)

app.listen(3000, function(){
    console.log('Server started');
})