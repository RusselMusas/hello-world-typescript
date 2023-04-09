"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("./point");
let point1 = new point_1.Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
let taxValue = calculateTax(52000);
console.log(taxValue);
//# sourceMappingURL=index.js.map