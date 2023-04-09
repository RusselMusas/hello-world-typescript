"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("./point");
let point1 = new point_1.Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();
let employee = {
    id: 2,
    name: "Russel",
    age: 20,
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
let mycolor = 'blue';
console.log(mycolor);
function kgToMiles(value) {
    if (typeof value === 'number') {
        console.log(typeof value);
        return value * 2.2;
    }
    else {
        console.log(typeof value);
        return parseInt(value) * 2.2;
    }
}
let responseConverted1 = kgToMiles(26);
console.log(responseConverted1);
let responseConverted2 = kgToMiles('26');
console.log(responseConverted2);
//# sourceMappingURL=index.js.map