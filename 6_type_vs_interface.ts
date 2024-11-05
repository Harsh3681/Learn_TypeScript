
// ..... 👇👇👇👇👇 ###### "Interface" 👹👹👹👹

interface PersonInterface1{
    name : string;
    age : number;
}

function greet4(Person : PersonInterface1){
    return "Hello from "+Person.name+ " Age "+Person.age;
}

//-------------------------------------------------------

// ..... 👇👇👇👇👇 ###### "type" 👹👹👹👹

type PersonType2 = {  // 👈👈👈 "=" <----------------- equal to 🟰
    name : string;
    age : number;
}

function greet1(Person : PersonType2){
    return "Hello from "+Person.name+ " Age "+Person.age;
}

//-------------------------------------------------------


console.log('By Type --> ', greet1({  // Type
    name : "happy",
    age : 24
}) );


console.log('By Interface --> ', greet4({ // Interface
    name : "Naresh",
    age : 22
}) );

//----------------------------------------------

interface justPerson2 {
    surname: string;
    greet(): void;
}
  
class Student implements justPerson2 {
    surname!: string; // if surname not define then "string" assigned
    greet() {
        console.log('hello');
    }
}

type Pet = {
    surname: string;
    run(): void;
};

class Cat implements Pet {
    surname!: string;
    run() {
        console.log('run');
    }
}

let meInter = new Student;  // calling Interface
meInter.greet();

let meType = new Cat;  // calling Type
meType.run();


// ---------------------------------------------------------------

type CarYear = number
type CarType = string
type CarModel = string

type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
