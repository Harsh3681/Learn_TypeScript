"use strict";
// ..... 👇👇👇👇👇 ###### "Interface" 👹👹👹👹
function greet4(Person) {
    return "Hello from " + Person.name + " Age " + Person.age;
}
function greet1(Person) {
    return "Hello from " + Person.name + " Age " + Person.age;
}
//-------------------------------------------------------
console.log('By Type --> ', greet1({
    name: "happy",
    age: 24
}));
console.log('By Interface --> ', greet4({
    name: "Naresh",
    age: 22
}));
class Student {
    greet() {
        console.log('hello');
    }
}
class Cat {
    run() {
        console.log('run');
    }
}
let meInter = new Student; // calling Interface
meInter.greet();
let meType = new Cat; // calling Type
meType.run();
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const car = {
    year: carYear,
    type: carType,
    model: carModel
};
