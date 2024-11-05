

interface Shapuu {
    getArea: () => number;
}

class myRectangle implements Shapuu{
    public constructor(protected readonly width: number, protected readonly height: number){}

    public getArea() : number{  // here we implement the function define in class
        return this.width * this.height; 
    };
}

const rect = new myRectangle(22,3);
console.log('Ans ', rect);











