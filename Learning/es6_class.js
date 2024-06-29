class Sample{
    sampleHello(){
        console.log('This is sample hello');
    }
}

class Hello extends Sample{
    constructor(num1,num2){
        super();
        this.num1 = num1;
        this.num2 = num2;
    }

    hello(){
        console.log('Hellow Friends: '+ (this.num1+this.num2));
    }
}

let hey = new Hello(10,20);
hey.hello();
hey.sampleHello();