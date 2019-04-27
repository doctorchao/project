
// 异步读取  顺序不一样
var fs = require("fs")
// fs.readFile("./out.txt",function(err,data){// 回调函数
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// });
// 同步读取  指代码书写顺序和代码执行顺序一样
// var res=fs.readFileSync("./out.txt",{"encoding":"utf-8"})
// console.log(res)
const http=require("http");
// 创建服务器
//函数嵌套 里面的函数是回调函数
//re: request 请求 res: response 响应
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});//(状态码，{对象})
    fs.readFile("day1-3/out.txt","utf-8",function(err,data){// 回调函数
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
        }
    });
    res.write("<p>欢迎访问node服务器。。。</p");
    res.write("<p>welcome to node server...</p>");
    res.end();
}).listen(3000);