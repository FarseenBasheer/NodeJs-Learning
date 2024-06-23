function Person(name, age, place){
    this.name = name;
    this.age = age;
    this.place = place;
    this.display = function(){
        console.log("Name: "+this.name+" Age: "+this.age);
    }
}

var farseen = new Person("Farseen", 24, "Thrissur");
var fayees = new Person("Fayees", 19, "Ernakulam");

// console.log(farseen);
// console.log(fayees);

farseen.display();
fayees.display();