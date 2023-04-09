import { Point } from './point';

// Invocation
let point1 = new Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();

// Nullish coalescing operator
let speed: number | null = null;

let ride = {
    // Falsy values in js (undefined, false, '', 0, null)
    // Nullish coalescing operator: ?? (only takes null or undefined)
    speed: speed ?? 30
}
console.log(ride);
