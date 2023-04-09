import { Point } from './point';

// Invocation
let point1 = new Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();

// Null

function greet(name: string | null | undefined) {
    if(name)
        console.log(`Hi ${name.toUpperCase()} !`);
    else
        console.log("Hola!");
}
// Call function
greet("Russel");

