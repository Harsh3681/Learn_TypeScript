

//  "enum" 👈 is same as that 👉 "type"
// just depends upon us about what to use "enum" 👈 or 👉 "type"

// Ex...... 👇👇👇👇👇 ###### "type"

type Arithematic = "add" | "sub" | "div" | "mul";  // 👉👉 "="

function ArithOperation(a: number, b: number, MyOper : Arithematic){
   if(MyOper === "add"){
    return a + b;
   }
   else if(MyOper === "sub"){
    return a - b;
   }
   else if(MyOper === "div"){
    return a / b;
   }
   else if(MyOper === "mul"){
    return a * b;
   }
   
    console.log('Operation Complete');
}

let ans = ArithOperation(3,1, "div");
console.log('Ans--> ', ans);

// ----------------------------------------------------------------------

// Ex...... 👇👇👇👇👇 ###### "enum"


enum Arithematic2 {  // "Without" 👉👉 "=" 🟰
    Add,
    Sub,
    Div,
    Mul
}

function ArithOperation2(a: number, b: number, MyOper1 : Arithematic2){
   if(MyOper1 === Arithematic2.Add){
    return a + b;
   }
   else if(MyOper1 === Arithematic2.Sub){
    return a - b;
   }
   else if(MyOper1 === Arithematic2.Div){
    return a / b;
   }
   else if(MyOper1 === Arithematic2.Mul){
    return a * b;
   }
   
    console.log('Operation Complete');
}

let ans2 = ArithOperation2(9,3, Arithematic2.Mul);
console.log('Ans--> ', ans2); 

// ----------------------------------------------------------
// OR

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);


