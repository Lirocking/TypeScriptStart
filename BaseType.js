//布尔类型
var isDone = false;
//数字类型
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
//字符串
var nameT = "bob";
nameT = "smith";
var age = 10;
var sentence = "Hello, my name is " + nameT + ".\nI'll be " + (age + 1) + " years old next month.";
//数组
var list = [1, 2, 3]; //传统模式
var list2 = [1, 2, 3]; //ts数组泛型
//元组Tuple
var x;
x = ['hello', 10]; //error: x = [10, 'hello'];
console.log(x[0].substr(1));
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //从0开始
var c = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {})); //从1开始
var colorName = Color[2];
//Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
//notSure.ifItExists();
//notSure.toFixed();
var listAny = [1, true, "free"];
//Void表示没有任何类型
var unusabel = undefined;
var nullValue = null;
//Null和Undefined (是所有类型的子类型，但指定了--strictNullChecks标记的变量，不能被赋值)
var u = undefined;
var n = null;
//Never 表示永不存在的值的类型
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) { }
}
//create({ prop: 0 });
//create(null);
//类型断言
var someValue = "this is a string";
var strLength = someValue.length;
var strLength2 = someValue.length;
