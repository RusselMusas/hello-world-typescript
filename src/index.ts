// Define class
class Point {
    x?: number;
    y?: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        // ...
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {
        // ...
        console.info(another);
    }
}

// Invocation
let point1 = new Point(7, 3);
point1.draw();

let point2 = new Point(4, 6);
point2.getDistance(point1);