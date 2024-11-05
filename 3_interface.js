"use strict";
//  Here we create an interface to define an 👉 "Datatype of containt inside "Obj" {} " 👇👇
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greet = Greet;
exports.ManusAge = ManusAge;
exports.ManusAge2 = ManusAge2;
// Purpose 1)
function Greet(Manus) {
    return "Hello from " + Manus.name + " age " + Manus.age + " Married " + Manus.married;
}
// Purpose 2)
function ManusAge(Manus2) {
    return "Hello Your age " + Manus2.age;
}
let justObj = {
    name: "Harshal",
    age: 23,
    married: false
};
console.log('Answer1 --> ', Greet(justObj)); // here pass "Obj" to "Greet" funct as expect Obj as inp for this funct
console.log('Answer2 --> ', ManusAge(justObj));
// ---------------------------------------------------------
// 👉👉👉👉👉 "any" 👈👈👈👈👈 datatype 
// Purpose 3)
function ManusAge2(Manus2) {
    return "Hello Your age " + Manus2;
}
console.log('Answer3 --> ', ManusAge2(55));
