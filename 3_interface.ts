 
//  Here we create an interface to define an 👉 "Datatype of containt inside "Obj" {} " 👇👇

interface Person {   // it is cool 😁 becz we just to define "interface" at once and we can use it for multi purpose
    name : string;
    age : number;
    married : boolean;
}

// Purpose 1)

export function Greet(Manus : Person) : string{  //Means here we need to paas an "Obj" of "Manus"  "return" type of "Obj" is "string" 👉 and "Person" we pass here which define the "Data types" of argument come as obj in "Greet" funct i.e 👉 we pass "justObj" as input to "Greet" funct

    return "Hello from "+Manus.name+ " age "+Manus.age+ " Married "+Manus.married;
}

// Purpose 2)

export function ManusAge(Manus2 : Person) : string{
    return "Hello Your age "+Manus2.age;
}



let justObj = {
    name : "Harshal",
    age : 23,
    married : false
}

console.log('Answer1 --> ', Greet(justObj)); // here pass "Obj" to "Greet" funct as expect Obj as inp for this funct

console.log('Answer2 --> ', ManusAge(justObj));

// ---------------------------------------------------------

// 👉👉👉👉👉 "any" 👈👈👈👈👈 datatype 

// Purpose 3)

export function ManusAge2(Manus2 : any) : string{ // "any" also be an "data type"
    return "Hello Your age "+Manus2;
}
console.log('Answer3 --> ', ManusAge2(55));




