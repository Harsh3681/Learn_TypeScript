
//  interface 👉👉👉 "extends" 👉👉👉 interface

//  Class 👉👉👉 "implements" 👉👉👉 interface

//  Class 👉👉👉 "extends" 👉👉👉 Class



interface hospital{
    department : string;
    OPT_Station : number;
}

interface doctor extends hospital{  // here "doctor" will take all property of "hospital" Interface
    name : string;
    salary : number;
}

class doctorInfo implements doctor {

    name : string;
    salary : number;
    department : string;
    OPT_Station : number;

    constructor(name : string, salary : number, department : string, OPT_Station : number) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.OPT_Station = OPT_Station;
    }

    greet(){  // Here "return" type of "Obj" is "string" 👉 and "Person" we pass here which define the "Data types" of argument come as obj in "Greet" funct i.e 👉 we pass "justObj" as input to "Greet" funct
        return "Hello from "+this.name+ " salary "+this.salary+ " department "+this.department+ " number Of OPT assigned " + this.OPT_Station ;
    }
}


const myObj2 = new doctorInfo("Ramu", 928727, "Artho", 5);
console.log('Answer ----> ', myObj2.greet())








