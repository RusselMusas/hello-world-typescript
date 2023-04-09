import { Point } from './point';

// Invocation
let point1 = new Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();

// Objects
let employee: { id: number, name: string, age: number } = { id: 2, name: "Russel", age: 20 };
console.log(employee);