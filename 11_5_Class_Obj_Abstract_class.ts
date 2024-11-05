
// Abstract class is an "Base" class for other classess

// Members that are left "unimplemented" also use the 👉👉 abstract keyword.



abstract class Polygon2 {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
}
  
class Rectangle2 extends Polygon2 {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
}

const mySecRect = new Rectangle2(3,4);
console.log("getArea ",mySecRect.getArea());