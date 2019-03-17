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
function returnMyName() {
  return myName;
}
