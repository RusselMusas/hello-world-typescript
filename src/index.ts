import { Point } from './point';

// Invocation
let point1 = new Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();

// function
function calculateTax(income: number, taxYear = 2022): number {
    if(taxYear == 2022 && income < 50_000)
        return income * 1.2;
    return income * 1.3;
}

let taxValue = calculateTax(52000);
console.log(taxValue);