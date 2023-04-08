// Define class
class Point {

    constructor(private x?: number, private y?: number) {}

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