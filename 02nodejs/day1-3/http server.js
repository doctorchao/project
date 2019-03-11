// 引入http模块
const http=require("http");
// 创建服务器
//函数嵌套 里面的函数是回调函数
//re: request 请求 res: response 响应
const server =http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});//(状态码，{对象})
    res.write("<p>欢迎访问node服务器。。。</p");
    res.write("<p>welcome to node server...</p>");
    res.end();
})   
// 监听一个端口 ，1024~65535之间。
server.listen(3000)
// 本机安装一个服务后，则本机IP地址为127.0.0.1  这IP有一个特殊对应域名：localhost。
// 每改变服务器代码，则需重启服务器。

/*const http=require("http");
const server=http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    res.write("<p>欢迎</p>");
    res.write("<p>welcome</p>");
    res.end();
})
server.listen(11354);*/

// server.on("request",function(req,res){})  //监听客户端请求 常规代码
// //经典代码
// const http=require("http");
// http.createServer((req,res)=>{
    
// }).listen;