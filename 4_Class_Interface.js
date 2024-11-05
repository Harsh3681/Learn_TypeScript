"use strict";
// "NOTE" --> we must need to forceFully implement "every" funct and "class" also which declered it in "Interface"
class Human {
    constructor(name, age, married, salary, bodyColor) {
        this.name = name;
        this.age = age;
        this.married = married;
        this.salary = salary;
        this.bodyColor = bodyColor;
    }
    greet() {
        return "Hello from " + this.name + " age " + this.age + " Married " + this.married + " salary " + this.salary + " bodyColor " + this.bodyColor;
    }
}
const myObj = new Human("Ramu", 23, true, undefined, "black");
console.log('Answer ----> ', myObj.greet());
