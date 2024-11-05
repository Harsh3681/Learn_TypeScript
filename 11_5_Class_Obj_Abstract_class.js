"use strict";
// Abstract class is an "Base" class for other classess
// Members that are left "unimplemented" also use the 👉👉 abstract keyword.
class Polygon2 {
    toString() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
class Rectangle2 extends Polygon2 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const mySecRect = new Rectangle2(3, 4);
console.log("getArea ", mySecRect.getArea());
