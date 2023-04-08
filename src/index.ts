// Define class
class Point {
    x!: number;
    y!: number;

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
let point1 = new Point();
point1.x = 5;
point1.y = 6;
point1.draw();

let point2 = new Point();
point2.x = 4;
point2.y = 3;
point2.getDistance(point1);