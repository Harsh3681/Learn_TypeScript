"use strict";
//  NOTE --> If no parameter type is defined, TypeScript will default to using "any" 👈👈👈
function myFunction() {
    console.log("Normal Function ");
}
myFunction();
// ------------------------------------
function myReturningFunct() {
    return 1 + 3;
}
console.log(myReturningFunct());
// ------------------------------------
function trialFunction(first, sec, third) {
    return first + sec + (third || 0); // here "third" is optional it can be 0
}
// ------------------------------------
function restArgumentAddFunction(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0); // use 0 becz if user doesn't pass extrta argument then just pass argument for "a" and "b" then our ans is 0;
}
console.log("Ans ", restArgumentAddFunction(10, 10, 19, 23, 90));
console.log("Ans ", restArgumentAddFunction(10, 10));
// ------------------------------------
//  Arrow function ---> ➡️
const arrowFunct = () => {
    console.log("Arrow Function ");
};
arrowFunct();
const negateFunction = (value) => value * -1;
console.log(negateFunction(10));
