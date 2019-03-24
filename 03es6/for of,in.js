// for循环的一个特别点，设置循环变量的那部分是一个父级作用域，而循环体内部是一个单独子作用域。
for (let i = 0; i < 3; i++){
    // let i = " qwe";
    console.log(i);
};
// for in  语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
//  var a = 12;
//  var b = 22;
//  [a,b] = [b,a];
//  console.log(a,b);

// const arr = ["q","w","e"];
// const [a,b,c,d="r"] = arr 
// console.log(a,b,c,d);

// let arr1 = [2,6,9,13];
// let arr2 = arr1.map(item => item + 2)
// // let arr1 = [2,6,9,13];   变量提升但不可用 存于暂时性死区
// console.log(arr2);
// var name = "火娃";
// let obj = {
//     name: "水娃",
//     logName: function() {  // 使用箭头函数的话 this绑定 指向父级作用域window
//         console.log(this.name);
//     }
// }
// obj.logName();

