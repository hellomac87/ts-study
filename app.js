"use strict";
// let & const
console.log("%cLET & CONST", "color:red");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // won`t work
// Block scpoe
function reset() {
    // console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
console.log("%cARROW FUCNTIONS", "color:red");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) {
    return number1 * number2;
};
console.log(multiplyNumbers(2, 20));
var greet = function () {
    console.log("Hello");
};
greet();
var greetFriend = function (friend) {
    console.log(friend);
};
greetFriend("Manu");
// Default Parameters;
console.log("%cDEFAULT PARAMETERS", "color:red");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown(20);
// Rest & Spread
console.log("%cREST & SPREAD", "color:red");
var numbers = [1, 10, 99, -5];
console.log(Math.max(1, 10, 99, -5));
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Max", 1, 22, 333));
// Destructuring
console.log("%cDESTRUCTURING(분해대입)", "color:red");
var myHobbies = ["Cooking", "Sports"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData = {
    userName: "Max",
    age: 27
};
var myName = userData.userName, myAge = userData.age;
console.log(myName, myAge);
// Template literals
console.log("%cTEMPLATE LITERALS", "color:red");
var userName = "Max";
var greeting = "Hello, I'm " + userName + ",\nI'm so cool.";
console.log(greeting);
