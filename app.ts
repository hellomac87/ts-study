// Exercise 1
const double = (value: number): number => value * 2;
console.log(double(10));

// Exercise 2
const greet = (name: string = "Max"): void => {
  console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4
const newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5
const [result1, result2, result3] = [3.89, 2.99, 1.38];
console.log(result1, result2, result3);

// Exercise 6
const scientist = { firstName: "Will", experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName, experience);
