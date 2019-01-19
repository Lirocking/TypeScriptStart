//布尔类型
let isDone: boolean = false;
//数字类型
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
//字符串
let nameT: string = "bob";
nameT = "smith";
let age: number = 10;

let sentence: string = `Hello, my name is ${nameT}.
I'll be ${age + 1} years old next month.`;
//数组
let list: number[] = [1, 2, 3];  //传统模式
let list2: Array<number> = [1, 2, 3];   //ts数组泛型
//元组Tuple
let x: [string, number];
x = ['hello', 10];  //error: x = [10, 'hello'];
console.log(x[0].substr(1));
//枚举
enum Color {Red, Green, Blue}   //从0开始
let c: Color = Color.Green;
enum Color2 {Red = 1, Green, Blue}  //从1开始
let colorName: string = Color[2];
//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExists();
notSure.toFixed();
let listAny: any[] = [1, true, "free"];
//Void表示没有任何类型
let unusabel: void = undefined;
let nullValue: void = null;
//Null和Undefined (是所有类型的子类型，但指定了--strictNullChecks标记的变量，不能被赋值)
let u: undefined = undefined;
let n: null = null;
//Never 表示永不存在的值的类型
function error(message: string): never {
    throw new Error(message)
}
function fail() {
    return error("Something failed");
}
function infiniteLoop(): never {
    while(true) { }
}
//Object 表示非原始类型（number, string, boolean, symbol, null, undefined）
declare function create(o: object | null): void;
create({prop: 0});
create(null);
//类型断言
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
let strLength2: number = (someValue as string).length

