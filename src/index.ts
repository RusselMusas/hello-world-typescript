import { Point } from './point';

// Invocation
let point1 = new Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();

// Type Alias
type Employee = {
    readonly id: number, 
    name: string, 
    age: number,
    retire: (date: Date) => void 
}

type Color = 'red' | 'white' | 'blue';

// Objects
let employee: Employee = { 
    id: 2, 
    name: "Russel", 
    age: 20,
    retire: (date: Date) => {
        console.log(date);
    }
 };

console.log(employee);

// using color type
let mycolor: Color = 'blue';
console.log(mycolor);

function kgToMiles(value: number | string) {
    if(typeof value === 'number') {
        console.log(typeof value);
        return value * 2.2;
    } else {
        console.log(typeof value);
        return parseInt(value) * 2.2
    }
}
let responseConverted1 = kgToMiles(26);
console.log(responseConverted1);
let responseConverted2 = kgToMiles('26');
console.log(responseConverted2);
