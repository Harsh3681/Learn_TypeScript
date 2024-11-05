
"use strict"

import { additionOnly } from "./2_myModule";  // // this way we can import the Module which we define in another file.



let x : number = 10;
// x = "Hello";   // error
console.log(x);

// ----------------------------------------

function Calculation1(first:number, second:number){
    return first + second;
}

function Calculation2(first:string, second:string) : string{  // 👉 this way we can mentioned the "Return type of funct" also. here it is 👉"string"
    return first + second;
}

let ans1 = Calculation1(2,4);
console.log("number ans ",ans1);

let ans2 = Calculation2("ram ", "sham");
console.log("string ans ",ans2);

// -----------------------------------------------

// Build Calculator

// function Calci(first:number, second:number, andType : string){
function Calci(
    first:number,
    second:number, 
    andType : "sum" | "mul" | "div" | "sub") {  // andType check direct need to match any one of them mentioned 4. More strict it is.
    
    if(andType==="sum"){
        return first+second;
    }
    else if(andType==="mul"){
        return first*second;
    }
    else if(andType==="div"){
        return first/second;
    }
    else if(andType==="sub"){
        return first-second;
    }
}

console.log('ans ', Calci(9,2,"mul"));

// -----------------------------------------------

console.log('additionOnly -> ', additionOnly(3,4));
console.log('additionOnly -> ', additionOnly(10,20));



