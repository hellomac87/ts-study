// let & const
console.log("%cLET & CONST", "color:red");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // won`t work

// Block scpoe
function reset() {
  // console.log(variable);
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log("%cARROW FUCNTIONS", "color:red");

const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number): number => {
  return number1 * number2;
};

console.log(multiplyNumbers(2, 20));

const greet = (): void => {
  console.log("Hello");
};

greet();

const greetFriend = (friend: string): void => {
  console.log(friend);
};

greetFriend("Manu");

// Default Parameters;
console.log("%cDEFAULT PARAMETERS", "color:red");

const countdown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log("Done!", start);
};

countdown(20);

// Rest & Spread
console.log("%cREST & SPREAD", "color:red");
const numbers = [1, 10, 99, -5];
console.log(Math.max(1, 10, 99, -5));
console.log(Math.max(...numbers));

function makeArray(name: string, ...args: number[]): number[] {
  return args;
}
console.log(makeArray("Max", 1, 22, 333));

// Destructuring
console.log("%cDESTRUCTURING(분해대입)", "color:red");
const myHobbies = ["Cooking", "Sports"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = {
  userName: "Max",
  age: 27
};
const { userName: myName, age: myAge } = userData;
console.log(myName, myAge);

// Template literals
console.log("%cTEMPLATE LITERALS", "color:red");
const userName = "Max";
const greeting = `Hello, I'm ${userName},
I'm so cool.`;
console.log(greeting);
