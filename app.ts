// string
let myName: string = "Max";
// myName = 20;

// number
let myAge: number = 27;
// myAge = '27';

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: any;
myRealAge = 27;
myRealAge = "27";

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100, "1"];
// hobbies = 100;

// tuples
let address: [string, number] = ["Superstreet", 90];

// enum
enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue // 101
}
let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = {
  brand: "BMW",
  series: 3
};
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  // this function should not anything
  console.log("hello");
  // return myName;
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(1, 'Max'));
console.log(multiply(2, 2));

// function types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string; age: number } = {
  name: "Max",
  age: 27
};

userData = {
  name: "asf",
  age: 11
};

// complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// complex = {};

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;

// check types
let finalValue = 30;
if (typeof finalValue === "number") {
  console.log("Final value is a number");
}

// never
function neverReturns(): never {
  throw new Error("An error!");
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
