let obj = {
    name: "tom",
    logName() {
        console.log(this.name);
    }
};

let str = "这是es6的字符串";
let str1 = "这是es6的字符串";

let fun1 = () => {
    console.log("es6的箭头函数");
}

obj.logName();
