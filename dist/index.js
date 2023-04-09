"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("./point");
let point1 = new point_1.Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();
let texBox = {
    drag: () => {
        console.log("Drag me");
    },
    resize: () => {
        console.log("Resize me");
    }
};
console.log(texBox);
let quantity = 50;
console.log("Quantity" + quantity);
//# sourceMappingURL=index.js.map