"use strict";
class myRectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    ;
}
const rect = new myRectangle(22, 3);
console.log('Ans ', rect);
