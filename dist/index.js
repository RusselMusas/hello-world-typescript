"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    setX(value) {
        if (value < 0)
            throw new Error('x value cannot be less than 0.');
        this.x = value;
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another) {
        console.info(another);
    }
}
let point1 = new Point(7, 3);
console.log(point1.getX());
point1.setX(9);
point1.draw();
let point2 = new Point(4, 6);
point2.getDistance(point1);
//# sourceMappingURL=index.js.map