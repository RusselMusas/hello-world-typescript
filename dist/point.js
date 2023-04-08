"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(value) {
        if (typeof (value) == 'undefined' || (typeof (value) == 'number' && value < 0))
            throw new Error('x value cannot be less than 0.');
        this._x = value;
    }
    set y(value) {
        if (typeof (value) == 'undefined' || (typeof (value) == 'number' && value < 0))
            throw new Error('y value cannot be less than 0.');
        this._y = value;
    }
    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
    getDistance(another) {
        console.info(another);
    }
}
exports.Point = Point;
//# sourceMappingURL=point.js.map