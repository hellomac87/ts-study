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
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    // this function should not anything
    console.log("hello");
    // return myName;
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(1, 'Max'));
console.log(multiply(2, 2));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Max",
    age: 27
};
userData = {
    name: "asf",
    age: 11
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = true;
// check types
var finalValue = 30;
if (typeof finalValue === "number") {
    console.log("Final value is a number");
}
// never
function neverReturns() {
    throw new Error("An error!");
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
