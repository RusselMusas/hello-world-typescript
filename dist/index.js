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
//# sourceMappingURL=index.js.map