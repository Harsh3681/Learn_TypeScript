"use strict";
//  interface 👉👉👉 "extends" 👉👉👉 interface
class doctorInfo {
    constructor(name, salary, department, OPT_Station) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.OPT_Station = OPT_Station;
    }
    greet() {
        return "Hello from " + this.name + " salary " + this.salary + " department " + this.department + " number Of OPT assigned " + this.OPT_Station;
    }
}
const myObj2 = new doctorInfo("Ramu", 928727, "Artho", 5);
console.log('Answer ----> ', myObj2.greet());
