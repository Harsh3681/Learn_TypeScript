"use strict";
//  Declearing Array in "js" 👇👇👇👇
//  let arr = [];
// let arr = Array(10);  // inbuil empty array of size 10
// let hs = new Array();  // both same above and below
// How to declered Array in TS 👇👇👇👇
let myArray1 = [];
myArray1.push("Naresh");
myArray1.push("Ganesh");
console.log('new Array ', myArray1);
// ---------------------------------------------------------------------------------
// "Readonly" 👈👈👈👈  prevent arrays from being changed.
const myConstArray = ["Mandip"];
function getFirstElement(arr) {
    //                          Or 👇 Or ☝️
    // function getFirstElement(arr : number[]){ // number, string, boolean... so on
    return arr[0];
}
let ans1 = getFirstElement([1, 3, 5]);
console.log('Ans --> ', ans1);
// ---------------------------------------------------------------------------------
console.log('1st Approch');
/* type InputWala = (number | string | boolean)[];
 function getFirstElement1(arr : InputWala) : (number | string | boolean){  */
//                       Or 👇 Or ☝️
function getFirstElement1(arr) {
    return arr[3];
}
let a = getFirstElement1([3, 4, 1, "nine"]);
let b = getFirstElement1(["one", "five", "seven", 87]);
console.log('a', a);
console.log('b', b);
// ---------------------------------------------------------------------------------
console.log('2nd Approch'); // 👇👇👇👇👇
function getFirstElement2(arr) {
    return arr[2];
}
const getFirstElementDummy2 = (myArr) => {
    return myArr[2];
};
let c = getFirstElement2([3, 4, 1]);
let d = getFirstElement2(["one", "five", "seven"]);
let dum = getFirstElementDummy2(["one", "five", "seven"]);
console.log('dummyArrowFunct Ans ', dum);
let userAns = getFirstElement2([
    {
        name: "Raj",
        age: 33
    }, {
        name: "Jaya",
        age: 20
    }, {
        name: "Naresh",
        age: 13
    }, {
        name: "Dipak",
        age: 63
    }
]);
console.log('c', c);
console.log('d', d);
console.log('UserAns', userAns);
// ---------------------------------------------------------------------------------
//  function mySwapdummy<M> (arr : M[]){}  // normal way
// Swap Que 👇👇👇👇 if both i/t of "same" type [number,number] or [string, string] or anythig but same same
function mySwap(a, b) {
    return [b, a];
}
let finalAns = mySwap(1, 2);
// -------------------------------------------------------------------
// const dummyArrowFun = () =>{} // "normal arrow funct declearation in js"
const SwapMe = (a, b) => {
    return [b, a];
};
let justAns = SwapMe(1, 8);
console.log(justAns);
// -------------------------------------------------------------------
// OR
// function mySwap<T>(ar : T[]){
//     let temp = ar[0];
//     ar[0] = ar[1];
//     ar[1] = temp;
//     return ar;
// }
// let finalAns = mySwap<string>(["Harsh","Naresh"]);
console.log('Swap', finalAns);
// -------------------------------------------------------------------
// Swap Que 👇👇👇👇 if both i/t of "differnt" type [number,string] or [string, boolean] or anythig but differnt differnt 
function SwapMyDiff(a, b) {
    return [b, a];
}
const finalAns2 = SwapMyDiff(998, "no");
console.log(finalAns2);
// https://www.cloudthat.com/resources/blog/data-validation-in-javascript-with-zod#:~:text=At%20its%20core%2C%20Zod%20is,to%20validate%20data%20at%20runtime.
