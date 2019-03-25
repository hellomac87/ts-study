class MyMap<T> {
  //   myMap: [] = [];
  private map: { [key: string]: T } = {};

  setItem(key: string, value: T) {
    // this.myMap.push({ [key]: value });
    this.map[key] = value;
  }

  getItem(key: string) {
    return this.map[key];
  }
  clear() {
    // this.myMap = [];
    this.map = {};
  }
  printMap() {
    // console.log(this.myMap);
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("name", "Max");
stringMap.setItem("age", "27");
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
