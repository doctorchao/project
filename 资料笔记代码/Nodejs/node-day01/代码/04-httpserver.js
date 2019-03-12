// 作业：在js中定义变量var,let,const，有什么区别？
// 引入一个模块：叫http模块，是一个内置模块
const http = require("http");
// 创建一台服务器，对外提供web服务
// 在一个函数中，套一个函数，里面的函数叫回调函数
// req是request，表示请求   res是response，表示响应
const server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    res.write("<h1>欢迎访问node服务器....</h1>")
    res.write("<h1>Hello Node.js Server....</h1>");
    res.end();
});
// 监听一个端口，1024~65535之间
server.listen(3000)
// 当本机安装了一台服务，那么本机的IP地址是127.0.0.1，这个IP有一个特殊的对应域名，叫localhost。
// 如果你改变了服务器代码，那么你一定要重启服务器


