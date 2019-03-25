var MyMap = /** @class */ (function () {
    function MyMap() {
        //   myMap: [] = [];
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, value) {
        // this.myMap.push({ [key]: value });
        this.map[key] = value;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        // this.myMap = [];
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        // console.log(this.myMap);
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem("name", "Max");
stringMap.setItem("age", "27");
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
