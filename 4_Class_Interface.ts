

interface PersonInfo{
    name : string;
    age : number;
    married : boolean;
    salary : undefined;
    bodyColor : any;   // 👈👈👈 "any" dataType.

    greet() : string;   // we can define "funct" also in "interface"
}

// "NOTE" --> we must need to forceFully implement "every" funct and "class" also which declered it in "Interface"

class Human implements PersonInfo{

    name : string;          // we need to define it here 1st then "Constructor" will work
    age : number;
    married : boolean;
    salary : undefined;
    bodyColor : any;

    constructor(name : string, age : number, married : boolean, salary : undefined, bodyColor : any){
        this.name = name;
        this.age = age;
        this.married = married;
        this.salary = salary;
        this.bodyColor = bodyColor;
    }

    greet(){  // Here "return" type of "Obj" is "string" 👉 and "Person" we pass here which define the "Data types" of argument come as obj in "Greet" funct i.e 👉 we pass "justObj" as input to "Greet" funct
        return "Hello from "+this.name+ " age "+this.age+ " Married "+this.married+ " salary " + this.salary + " bodyColor "+this.bodyColor;
    }
}

const myObj = new Human("Ramu", 23, true, undefined, "black");
console.log('Answer ----> ', myObj.greet())
