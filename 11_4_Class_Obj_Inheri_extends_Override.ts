

interface Shape1 {
    getArea: () => number;
}
  
class Rectangle1 implements Shape1 {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}
  
class Square1 extends Rectangle1 {
    public constructor(width: number) {
        super(width, width);
    }

    // this toString replaces the toString from Rectangle
    public override toString(): string { // 👈👈👈👈 we must need to use "override"  keyword
        return `Square[width=${this.width}]`;
    }
}

const dummyRect = new Square1(22);
console.log('Ans ', dummyRect.getArea());



