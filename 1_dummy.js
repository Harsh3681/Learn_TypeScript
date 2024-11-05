"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_myModule_1 = require("./2_myModule"); // // this way we can import the Module which we define in another file.
let x = 10;
// x = "Hello";   // error
console.log(x);
// ----------------------------------------
function Calculation1(first, second) {
    return first + second;
}
function Calculation2(first, second) {
    return first + second;
}
let ans1 = Calculation1(2, 4);
console.log("number ans ", ans1);
let ans2 = Calculation2("ram ", "sham");
console.log("string ans ", ans2);
// -----------------------------------------------
// Build Calculator
// function Calci(first:number, second:number, andType : string){
function Calci(first, second, andType) {
    if (andType === "sum") {
        return first + second;
    }
    else if (andType === "mul") {
        return first * second;
    }
    else if (andType === "div") {
        return first / second;
    }
    else if (andType === "sub") {
        return first - second;
    }
}
console.log('ans ', Calci(9, 2, "mul"));
// -----------------------------------------------
console.log('additionOnly -> ', (0, _2_myModule_1.additionOnly)(3, 4));
console.log('additionOnly -> ', (0, _2_myModule_1.additionOnly)(10, 20));
