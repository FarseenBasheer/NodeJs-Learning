const Promise=require('promise');

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Farseen");
        }, 3000) // Task with 3s delay
    })
}

function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("1234567890");
        }, 2000) // Task with 2s delay
    })
}

// Promise.all([getName(), getMobile()]).then((result)=>{
//     console.log(result);
// }) // run all in 3sec

// Async, Await. Name and phone in single function
// function getUser(){
//     let name = getName();
//     console.log(name);
// }

async function getUser(){
    let name = await getName();
    console.log(name);

    let mobile = await getMobile();
    console.log(mobile); // run in 5 sec
}

getUser();
