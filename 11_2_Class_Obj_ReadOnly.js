"use strict";
class Person2 {
    constructor(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const myPerson = new Person2("Jane");
console.log(myPerson.getName());
