
//创建一个对象
var obj = new Object();

//向对象中添加属性
obj.name = "hefang";

obj.age = 11;

//修改对象的属性
obj.name = "hepiao";

//打印输出
console.log(obj.name);

//删除对象的属性
delete obj.age;



//对象的属性可以是任意数据类型  甚至可以是对象
var obj2 = new Object();

obj2.age = 99999;


//将obj2设置位obj的属性
obj.age = obj2;

console.log(obj.age.age);


//如果要用特殊的属性名，不能采用。的方式来操作
//需要另一种方法    读取是也需要采用这种方法
//对象["属性名"]=属性值

obj2["123"] = "你好吗？";
obj2["nihao"] = 55555;

var n = "nihao";

//“123”是一个字变量 n是变量    n要转换为字变量
console.log(obj2[n]);

/*
* in 运算符
*    语法  "属性名" in 对象
* 可以检查一个对象中是否含有指定的属性 有返回T 没有返回F
* */

console.log(['123'] in obj2);


/////////////////////////////////////////////////////////////////

//基本数据类型和应用数据类型

//基本数据类型
// Math Function Obect String Number Boolen

/*应用数据类型
object
* */

/*
js的变量是保存在栈内存中的
基本数据的类型的值在栈中存储，
值与值之间是独立存在的，修改一个变量不会影响其他的变量

应用数据类型
对象是保存在推内存的，每创建一个新对象，就会在推内存中开辟一个新空间
而变量保存的是对象的内存地址，如果两个对象引用同一个变量
当一个通过一个变量修改属性时，另一个也会受到影响
unll 一个对象会断开链接 另一个不受影响
两个对象哪怕是一样的  内存不一样（两个空间 两个地址）  那j他们也完全不相同

*/


var a = 123;
var b = a;
var a = 456;

console.log("a=" + a);  //546
console.log("b=" + b);  //123


var obj = new Object();

obj.name = "你好吗 我很好吧";

var obj2 = obj;

//改变obj的name的属性
obj.name = "不好";


console.log(obj.name);

console.log(obj2.name);

//设置obj2为null   obj不受影响
obj2 = null;

console.log(obj2); //null

//比较

var c = 10;
var d = 10;

console.log(c == d);


var obj3 = new Object();
var obj4 = new Object();
obj3.name = "沙和尚";
obj4.name = "沙和尚";

console.log(obj3 == obj4);

/*
* 当比较两个基本数据类型的值时，就是比较值。
* 而比较两个引用数据类型时，它是比较的对象的内存地址，
* 		如果两个对象是一摸一样的，但是地址不同，它也会返回false
*/

///////////////////////////////////////////////////////////////////

/*
* 使用对象字面量来创建一个对象
*/
var obj = {};

console.log(typeof obj);

obj.name = "孙悟空";

//console.log(obj.name);

/*
 * 使用对象字面量，可以在创建对象时，直接指定对象中的属性
 * 语法：{属性名:属性值,属性名:属性值....}
 * 	对象字面量的属性名可以加引号也可以不加，建议不加,
 * 	如果要使用一些特殊的名字，则必须加引号
 *
 * 属性名和属性值是一组一组的名值对结构，
 * 	名和值之间使用:连接，多个名值对之间使用,隔开
 * 	如果一个属性之后没有其他的属性了，就不要写,
 */

