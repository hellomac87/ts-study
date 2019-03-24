// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({ name: "Max", age: 27 }));

// Built-in Generics
const testResult: Array<number> = [1.84, 2.33];
testResult.push(-2.99);
console.log(testResult);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}
printAll<string>(["Apple", "Banana"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));
