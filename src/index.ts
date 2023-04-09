import { Point } from './point';

// Invocation
let point1 = new Point(7, 3);
console.log(point1.x);
point1.x = 9;
point1.y = 5;
point1.draw();

// Type Alias
// Intersection
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UiWidget = Draggable & Resizable;

let texBox: UiWidget = {
    drag: () => {
        console.log("Drag me");
    },
    resize: () => {
        console.log("Resize me");
    }
}
console.log(texBox);


