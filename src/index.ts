// Define class
class Point {

    constructor(private _x?: number, private _y?: number) {}

    get x(): number | undefined {
        return this._x;
    }

    get y(): number | undefined {
        return this._y;
    }

    set x(value: number | undefined) {
        if(typeof(value) == 'undefined' || (typeof(value) == 'number' && value < 0))
            throw new Error('x value cannot be less than 0.');
        
        this._x = value;
    }

    set y(value: number | undefined) {
        if(typeof(value) == 'undefined' || (typeof(value) == 'number' && value < 0))
            throw new Error('y value cannot be less than 0.');
        
        this._y = value;
    }

    draw() {
        // ...
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    getDistance(another: Point) {
        // ...
        console.info(another);
    }
}

// Invocation
let point1 = new Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();

let point2 = new Point(4, 6);
point2.getDistance(point1);