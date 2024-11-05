"use strict";
//  "enum" 👈 is same as that 👉 "type"
// just depends upon us about what to use "enum" 👈 or 👉 "type"
function ArithOperation(a, b, MyOper) {
    if (MyOper === "add") {
        return a + b;
    }
    else if (MyOper === "sub") {
        return a - b;
    }
    else if (MyOper === "div") {
        return a / b;
    }
    else if (MyOper === "mul") {
        return a * b;
    }
    console.log('Operation Complete');
}
let ans = ArithOperation(3, 1, "div");
console.log('Ans--> ', ans);
// ----------------------------------------------------------------------
// Ex...... 👇👇👇👇👇 ###### "enum"
var Arithematic2;
(function (Arithematic2) {
    Arithematic2[Arithematic2["Add"] = 0] = "Add";
    Arithematic2[Arithematic2["Sub"] = 1] = "Sub";
    Arithematic2[Arithematic2["Div"] = 2] = "Div";
    Arithematic2[Arithematic2["Mul"] = 3] = "Mul";
})(Arithematic2 || (Arithematic2 = {}));
function ArithOperation2(a, b, MyOper1) {
    if (MyOper1 === Arithematic2.Add) {
        return a + b;
    }
    else if (MyOper1 === Arithematic2.Sub) {
        return a - b;
    }
    else if (MyOper1 === Arithematic2.Div) {
        return a / b;
    }
    else if (MyOper1 === Arithematic2.Mul) {
        return a * b;
    }
    console.log('Operation Complete');
}
let ans2 = ArithOperation2(9, 3, Arithematic2.Mul);
console.log('Ans--> ', ans2);
// ----------------------------------------------------------
// OR
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
