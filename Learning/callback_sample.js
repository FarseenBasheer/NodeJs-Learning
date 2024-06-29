// Synchronous way

// var dt = new Date()// Current date will be now in dt
// console.log('hello');
// for(i=0;i<1000;i++){
//     console.log('Loop');
// }
// console.log('End');
// var diff = new Date() - dt;
// console.log(diff); // Difference in milli seconds


// function longTask(milliSecondTime){
//     dt = new Date;
//     while((new Date()-dt) <= milliSecondTime){

//     }
// }

// console.log('started');
// longTask(2000);
// console.log('ended');

// console.log('started');
// longTask(2000);
// console.log('ended');

// console.log('started');
// longTask(2000);
// console.log('ended');


// Asynchronous way
// var dt = new Date()// Current date will be now in dt
// console.log('hello');
// for(i=0;i<1000;i++){
//     console.log('Loop');
// }
// console.log('End');
// var diff = new Date() - dt;
// console.log(diff); // Difference in milli seconds


// function longTask(milliSecondTime){
//     dt = new Date;
//     while((new Date()-dt) <= milliSecondTime){

//     }
// }

// function showEnd(){
//     console.log('Ended')
// }

// console.log('started');
// setTimeout(showEnd, 2000); // setTimeout works in asynchronous way. First parameter function name (callback). Here showEnd is the callback. This means that showEnd should work after 2000 millisecond. Asynchronous way. Here setTimeout is a asynchronous function.

// console.log('started');
// setTimeout(showEnd, 2000);

// console.log('started');
// setTimeout(showEnd, 2000);


// Create callback

// var hello = (data) => {
//     console.log("Data: "+data)
// } // Same below. Another method to write function

var hello = function(data){
    console.log("Data: "+data);
}

var hey = function(callback){
    console.log("hey working");
    callback("Crossroads")
}

hey(hello);