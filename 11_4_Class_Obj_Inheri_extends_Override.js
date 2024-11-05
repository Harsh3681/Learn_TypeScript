"use strict";
class Rectangle1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}
class Square1 extends Rectangle1 {
    constructor(width) {
        super(width, width);
    }
    // this toString replaces the toString from Rectangle
    toString() {
        return `Square[width=${this.width}]`;
    }
}
const dummyRect = new Square1(22);
console.log('Ans ', dummyRect.getArea());
