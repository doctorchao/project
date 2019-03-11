//拓展运算符 ‘...’  剩余参数
// const player = ["Alex", 9831, 5.5, 9.8, 9.9];

// const [name, id, ...scores] = player;
// console.log(...scores);

// const arr = [2,3,5];
// console.log(...arr);

// let id = 0;

// let userIds = {
//     userIds[`data-id-${++id}`]: id,
//     userIds[`data-id-${++id}`]: id,
//     userIds[`data-id-${++id}`]: id,
//     userIds[`data-id-${++id}`]: id,
// }
// console.log(userid)

// let keys = ["name", "age"];
// let values = ["Tom", "18"];

// let obj = {
//     [keys[0]]: values[0],
//     [keys[1]]: values[1]
// }
// console.log(obj)
// var a = "2";
// console.log(a,"a");
// function makePerson(name, sex, shengao) {
//     this.name = name;
//     this.sex = sex;
//     this.shengao = shengao;
    
// }
// makePerson.prototype.sort = 'yellow';
// var a = new makePerson (1,2,180);
// console.log(a);
// console.log(a.sort);

// function MakePerson(name, sex, shengao) {
//     this.name = name;
//     this.sex = sex;
//     this.shengao = shengao;
// }
// MakePerson.prototype.nation = "中国人";
// // console.dir(MakePerson)
// // console.log()会在浏览器控制台打印出信息
// // console.dir()可以显示一个对象的所有属性和方法
                              


// var person1 = new MakePerson("王力宏", "1", "185");
// var person2 = new MakePerson("柳岩", "0", "165");
// console.log(person1);
// console.log(person2.nation);

// 数组去重
// let arr = [1,3,56,88,88];
// arr = [...new Set(arr)];
// console.log(arr);

// const set = new Set([1,2,3,4,5,5,4]);
// console.log(set);

//  删除
// var a = {
//     b:"1"
// }; 
// delete a.b; // (a.b)
// console.log(a);

//  for of 循环
// var arr = ["one", "two", 'three', 'four'];
// // for(let item of arr){
// //     console.log(item);
// //     if(item == "two"){
// //         break;
// //     }
// // }
// console.log(arr.entries());
// for(let [index, item] of arr.entries()){
//     console.log(index);
//     console.log(item);
// }

// Array.from Array.of 
// ES6新增了很多数组操作的方法。但是，Array.from和Array.of 并不在数组的原型对象上。
// 或者说，并不是一个动态的方法。
// 所以，我们是不可以直接在数组上去调用这个方法的。

// array.sort() 排序
// function sortNumber(a,b)
// {
// return a - b
// }

// ar arr = new Array(6)
// arr[0] = "10"
// arr[1] = "5"
// arr[2] = "40"
// arr[3] = "25"
// arr[4] v= "1000"
// arr[5] = "1"

// console.log(arr + "<br />")
// console.log(arr.sort(sortNumber))

// var arr = new Array(4);
// console.log(arr);
// var arr1 = Array.of(2,4,6);
// var arr2 = Array.of(6);
// console.log(arr1, "arr1")
// console.log(arr2, "arr2")

// 对象方法
// var obj = {
//     name:'王力宏',
//     sex: '男孩子',
//     desc: '歌唱家'
// }
// var person = {};
// for(var key in obj) {
//     person[key] = obj[key]
// }
// person.account = "10个亿";
// console.log(person)

// var obj = {
//     name:'王力宏',
//     sex: '男孩子',
//     desc: '歌唱家',
//     arr: [2,4,6]
// }

// var person = {};
// Object.assign(person, obj);
// console.log(person)
// person.account = "10个亿";
// person.arr[1] = 998;
// console.log(obj, 'obj');
// obj.song = "大城小事"
// console.log(obj, 'obj');
// console.log(person, 'person');