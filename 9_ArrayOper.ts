
//  Declearing Array in "js" 👇👇👇👇

//  let arr = [];
// let arr = Array(10);  // inbuil empty array of size 10
// let hs = new Array();  // both same above and below


// How to declered Array in TS 👇👇👇👇

let myArray1 : string[] = [];
myArray1.push("Naresh");
myArray1.push("Ganesh");
console.log('new Array ', myArray1);

// ---------------------------------------------------------------------------------

// "Readonly" 👈👈👈👈  prevent arrays from being changed.

const myConstArray : readonly string[] = ["Mandip"];
// myConstArray.push("Jay"); // justv uncomment and see error

// ---------------------------------------------------------------------------------

//  OR 👹

type myArray = number[]; // <----- 👈👈 instead of number any datatype we can use.

function getFirstElement(arr : myArray){
//                          Or 👇 Or ☝️
// function getFirstElement(arr : number[]){ // number, string, boolean... so on
    return arr[0];
}

let ans1 = getFirstElement([1,3,5]);
console.log('Ans --> ', ans1);

// ---------------------------------------------------------------------------------

console.log('1st Approch')

/* type InputWala = (number | string | boolean)[];
 function getFirstElement1(arr : InputWala) : (number | string | boolean){  */
//                       Or 👇 Or ☝️
function getFirstElement1(arr:any){    // "any" also an data type here like "number", "string" but 👉 "any" is not good practice
    return arr[3];
}

let a = getFirstElement1([3,4,1,"nine"]);
let b = getFirstElement1(["one", "five","seven",87]);

console.log('a', a);
console.log('b', b);

// ---------------------------------------------------------------------------------

console.log('2nd Approch') // 👇👇👇👇👇

function getFirstElement2 <T> (arr: T[]){   // <T> 👈 It can be any "Alphabet" instead of "T"
    return arr[2];
}

const getFirstElementDummy2 = <M> (myArr : M[]) =>{  // arrow funct ➡️
    return myArr[2];
}

let c = getFirstElement2<number>([3,4,1]);
let d = getFirstElement2<string>(["one", "five","seven"]);
let dum = getFirstElementDummy2<string>(["one", "five","seven"]);

console.log('dummyArrowFunct Ans ', dum);

type MyUser = {
    name : string,
    age : number
}
let userAns = getFirstElement2<MyUser>([  // "MyUser" obj 👈 also be an "dataType" here
    {
        name :"Raj",
        age : 33
    },{
        name :"Jaya",
        age : 20
    },{
        name :"Naresh",
        age : 13
    },{
        name :"Dipak",
        age : 63
    }
])

console.log('c', c);
console.log('d', d);
console.log('UserAns', userAns)

// ---------------------------------------------------------------------------------


//  function mySwapdummy<M> (arr : M[]){}  // normal way

// Swap Que 👇👇👇👇 if both i/t of "same" type [number,number] or [string, string] or anythig but same same

function mySwap<T>(a : T, b : T) : [T,T]{  // here return type--> whatever we pass as "T" .👉 Means whatever data type of "a" & "b" is return w.r.t
    return [b,a]
}
let finalAns = mySwap(1,2);

// -------------------------------------------------------------------
// const dummyArrowFun = () =>{} // "normal arrow funct declearation in js"

const SwapMe = <T>(a : T, b : T) : [T,T] => { // Arrow funct in TS also
    return [b, a];
}
let justAns = SwapMe(1,8);
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

function SwapMyDiff<M, N>(a :M, b:N) : [N, M]{
    return [b, a];
}

const finalAns2 = SwapMyDiff(998, "no");
console.log(finalAns2);


// https://www.cloudthat.com/resources/blog/data-validation-in-javascript-with-zod#:~:text=At%20its%20core%2C%20Zod%20is,to%20validate%20data%20at%20runtime.


