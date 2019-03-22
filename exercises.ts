// Exercise 1
class Car {
  name: string;
  acceleration = 0;
  constructor(name: string = "") {
    this.name = name;
  }

  honk() {
    console.log("Toooooooooot!");
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}
const car = new Car("BMW");
car.honk();
car.accelerate(10);
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
class BaseObject {
  width = 0;
  length = 0;
}
class Rectangle extends BaseObject {
  calcSize() {
    return this.width * this.length;
  }
}
const rectangle = new Rectangle();
rectangle.width = 15;
rectangle.length = 2;
console.log(rectangle.calcSize());

// Exercise 3

class Person {
  private _firstName: string = "";

  get firstName() {
    return this._firstName;
  }
  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }
}
// Object.defineProperty(person, "firstName", {
//   enumerable: true,
//   configurable: true
// });
const person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
