"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("./point");
let point1 = new point_1.Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();
let point2 = new point_1.Point(4, 6);
point2.getDistance(point1);
let sales = 123456789;
console.log(sales);
let numbers = [1, 2, '3'];
console.log(numbers);
//# sourceMappingURL=index.js.map