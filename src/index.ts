console.log("Hello world");
let age: number = 20;

if(age < 50)
    age +=20

console.log("Age is: " + age);

function renderX(coordonnees: any) {
    console.log(coordonnees);
}

// Tuples
let user: [number, string] = [2, "Russel"];
console.log(user);

enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

let message;
message = "abc";
let endsWith = message;

// Arrow function
let doLog = (myParam: string) => console.log(myParam);


let drawPoint = (point: { x: number, y: number}) => {
    // ...
    console.log(point);
}

drawPoint({
    x: 2, 
    y: 5
})

interface Point {
    x: number, 
    y: number
}

let drawPoint2 = (point: Point) => {
    // ...
    console.log(point);
}

drawPoint2 ({
    x: 2,
    y: 5
})