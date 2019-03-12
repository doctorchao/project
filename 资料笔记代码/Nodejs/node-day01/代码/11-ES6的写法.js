const http = require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    res.write("hello world")
    res.write("hello world")
    res.write("hello world")
    res.write("hello world")
    res.end()
}).listen(3000)









// 第一作业：var const let 区别
// 第二作用：箭头函数









// 函数声明
// function f(){
// }
// // 函数表达式
// var f1 = function(){
// }
// // 箭头函数
// var f2 = ()=>{

// }