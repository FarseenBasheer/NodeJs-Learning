var Person={name:"Farseen", age:24, place:"Thrissur", display: function(){
    var name = "Fasil";
    console.log(this.name);
}};

// console.log(Person.name);

// console.log(Person['age']);

// for(x in Person){
    // console.log(x);
    // console.log(Person[x]);
// }

Person.name = "Fayees";

Person.dob = "07-08-1999";

Person.displayAge =  function(){
    console.log(this.age);
}

// console.log(Person);
// Person.display();
// console.log(Person.display());

Person.displayAge();

console.log(Person);