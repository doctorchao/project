//  this
// function q(){
//     console.log("123")
// }
// q();
// var obj = {
//     name: "王力宏",
//     logName: function () {
//         console.log(this.name)
//     }
// }
// obj.logName();
// (function (){
//     console.log(this)
// })();

//  构造器函数
// var person1 = {
//     name:'123',
//     height:'180',
// };
// var person2 = {
//     name:'222',
//     height:'190',
// } ;
// console.log(person1);

// function made(name,height){
//     return{
//         name:name,
//         height:height,
//     }
// }
// var person1 =new made(123,223);
// console.log(person1);
// 构造器函数生产对象
// function MakePerson(name, sex, shengao) {
//     this.name = name;
//     this.sex = sex;
//     this.shengao = shengao;
// }
// MakePerson.prototype.nation = "中国人";
// console.dir(MakePerson)
// var person1 = new MakePerson("王力宏", "1", "185");
// var person2 = new MakePerson("柳岩", "0", "165");
// console.log(person1);
// console.log(person2.nation);

// var for es6
// let str = "代码1"
// let str = "代码2"
// console.log(str)
// {
//     let b = "123"
//     console.log(b)
// }
// console.log(b)

// 箭头函数  map foreach
// var arr = [1,2,3,4]
// arr.forEach(function (a){   // 这个函数这里没有返回值
//     console.log(a*2)
// })

// var d = arr.forEach(a => a*3)
// console.log(d);

// var b = arr.map((a)=>a*3);
// console.log(b);
// var c = arr.map(a => a*4);
// console.log(c)
// console.log(arr)

// var hanb = {
//     name:"莫b",
//     foods:["shit","豆饼","db"],
//     zuhe:function(){
//         this.foods.forEach(function(food){
//             console.log(`${this.name}喜食${food}`)
//         })
//     }
// }
// hanb.zuhe();
// var hanb = {
//     name:"莫b",
//     foods:["shit","豆饼","db"],
//     zuhe:function(){
//         this.foods.forEach((food)=>{
//             console.log(`${this.name}喜食${food}`)
//         })
//     }
// }
// hanb.zuhe();

// var abc = function(name,sort){
//     console.log(`${name}是一种${sort}`);
// }
// var q = new abc("星星小莫","sb")

// 字符串
// innerhtml 用于获取对象内容（_.innerhtml）或向对象插入内容（_.innerhtml="..."）

// reduce方法  
// 整个reduce的结果是最后一次计算的返回值。切记是最后一次的返回值。
// 回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：如果调用reduce()时提供了initialValue，
// accumulator取值为initialValue，currentValue取数组中的第一个值；如果没有提供 initialValue，
// 那么accumulator取数组中的第一个值，currentValue取数组中的第二个值

// var arr = [1,2,3,4,5]                //此例没有initialvalue
// arr.reduce((accumulator, currentValue) => acc * current,initialValue) //返回值是120
  

// 数组结构
// var num1 = 998;
// var num2 = undefined;
// [num2, num1=888] = [num1, num2];

// console.log(num1)
// console.log(num2)

// const arr = ["2", "3", "4"];
// // const [one, two] = arr;
// // console.log(one, two); //one, two
// const [one,two,three, four="4"] =arr;
// console.log(one,two,three,four)


