"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another) {
        console.info(another);
    }
}
let point1 = new Point(7, 3);
point1.draw();
let point2 = new Point(4, 6);
point2.getDistance(point1);
//# sourceMappingURL=index.js.map