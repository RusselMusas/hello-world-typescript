import { Point } from './point';

// Invocation
let point1 = new Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();

let point2 = new Point(4, 6);
point2.getDistance(point1);

// Built-in Types
let sales = 123_456_789;
console.log(sales);

let numbers: number[] = [1, 2, 3];
console.log(numbers);

