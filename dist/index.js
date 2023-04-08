"use strict";
console.log("Hello world");
let age = 20;
if (age < 50)
    age += 20;
console.log("Age is: " + age);
function renderX(coordonnees) {
    console.log(coordonnees);
}
let user = [2, "Russel"];
console.log(user);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map