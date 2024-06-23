// var d = new Date("10 March 2019");

// console.log(d.getDate());
// console.log(d.getFullYear());

try {
    if(a===0){
        throw "User not found"; // If given like this, if a is equal to zero, then catch will work. We use throw to create exception by our own.
    }
} catch (err) {
    console.log(err); // We can print that error object like this.
}finally{
    // This will be executed after the try OR catch block works. Irrespective of try or catch, this will work.
}