import { Point } from './point';

// Invocation
let point1 = new Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();

// Type Alias
// Litteral Type
type Quantity = 50 | 75 | 100;
let quantity: Quantity = 75;
console.log("Quantity: " + quantity);

// Litteral Type
type Color = 'red' | 'blue' | 'white';
let mycolor: Color = 'red';
console.log("mycolor: " + mycolor);

