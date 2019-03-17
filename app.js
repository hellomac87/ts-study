"use strict";
// string
var myName = "Max";
// myName = 20;
// number
var myAge = 27;
// myAge = '27';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
myRealAge = "27";
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100, "1"];
// hobbies = 100;
// tuples
var address = ["Superstreet", 90];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = {
    brand: "BMW",
    series: 3
};
console.log(car);
