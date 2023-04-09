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

// Objects
let employee: Employee = { 
    id: 2, 
    name: "Russel", 
    age: 20,
    retire: (date: Date) => {
        console.log(date);
    }
 };
 // employee.id = 2; // id is readonly, cannot be changed later

console.log(employee);