var http = require('http'); // http is a module in node js core. So no need to install it separately as we did for others.

// http.createServer(server).listen(7000); // if we run this code, this code will be run in the server with 7000 port.

// function server(req,res){
//     res.write('Hi Friends'); // in chrome type http://localhost:7000/ and you can see this is printed there.
//     res.end();
// }

// http.createServer(function(req, res){ // this function will work only if there is a request. ie, only if a cutomer accesses the localhost:7000 here, the function will be called and the response will be printed.
//     res.write('Hi Friends');
//     res.end();
// }).listen(7000);

// var fs=require('fs'); // the module to read files. FS - File System

// http.createServer(function(req, res){

//     fs.readFile('samplehtml.html',function(err,data){ // samplehtml.html will be read and its contetn is there in the data.
//         // we can handle errors here like if(data) or if(err) like that. Now we assume there is data and do the program.
//         res.writeHead(200, {'Content-Type':'text/html'}) // to give an idea that the response is an html and the status code 200 is for showing it is a success message code. Content type will show the type of content . For eg, here html.
//         res.write(data);
//         res.end();
//     }) // function is callback function. This is async. So the code will not wait for the fs to read the file. It will execute the rest of the code and response will be printed. So inorder to avoid that we will add a callback function as second argument to only run the rest after the file is read. first argument is the name of the file.
// }).listen(7000);
// // err - if no file. data will be in the error object. if there is data, data will be in the dat object.

// var fs=require('fs');

// http.createServer(function(req, res){
//     if(req.url==='/'){
//         fs.readFile('samplehtml.html',function(err,data){
//             res.writeHead(200, {'Content-Type':'text/html'})
//             res.write(data);
//             res.end();
//         })
//     }else if(req.url==='/login'){
//         res.write('login');
//         res.end();
//     }else{
//         res.writeHead(404, {'Content-Type':'text/html'}) // This can be found in network tab as 404 and type html.
//         res.write('error');
//         res.end();
//     }
// }).listen(7000, function(){
//     console.log('Server started');
// }); // we are not getting a messsage like server is running while we run in the terminal. So we can add a second parameter like this to get a message of server is running.

// the above can also be written as
// }).listen(7000, ()=>{
//     console.log('Server started');
// });

// the above {} can also be avoided like }).listen(7000, ()=>console.log('Server started');); we can use this arrow function instead of the functions that we used above fs.readFile in line 32.

var fs=require('fs');
var url=require('url'); // inbuilt module

http.createServer(function(req, res){
    var q=url.parse(req.url, true); // to filter the params in the url parse it like this
    // console.log(q.pathname);
    // if(req.url==='/'){
    if(q.pathname==='/'){ // req.url changed to q.pathname.
        fs.readFile('samplehtml.html',function(err,data){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data);
            res.end();
        })
    }else if(q.pathname==='/signup'){
        fs.readFile('signup.html',(err,data)=>{
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data);
            res.end();
        })
    }else if(q.pathname==='/signupaction'){ // form action will comes like http://localhost:7000/signupaction?fname=Farseen&lname=Basheer&mobile=000 . So the page will show like error. So we have url modules to handle this. Here fname, lname etc are taken from name in html.
        // console.log(q.query); // now we got this as a query. we need this as an object. so we add a true in parse()
        // console.log(q.query.fname); 
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>'+q.query.fname+'</h1>');
        // res.write('action');
        res.end();
    }else{
        res.writeHead(404, {'Content-Type':'text/html'}) // This can be found in network tab as 404 and type html.
        res.write('error');
        res.end();
    }
}).listen(7000, ()=>{
    console.log('Server started');
});