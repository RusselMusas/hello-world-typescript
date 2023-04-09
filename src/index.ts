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

// Arrays
let numbers: number[] = [1, 2, 3];
console.log(numbers);

// Tuples
let user: [number, string] = [1, "Russel"];
console.log(user);

// Enums
const enum Size { Small = 1, Medium, Large };
let mysize: Size = Size.Medium;
console.log(mysize);
