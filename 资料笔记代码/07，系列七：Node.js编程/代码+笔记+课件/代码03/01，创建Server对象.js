// 引入http系统模块
var http = require("http");
// 创建一个Server对象
var server = http.createServer();
// 注册一个用户请求事件
server.on("request",function (req, res) {
    // req表示请求的信息   res表示服务器的响应对象
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    res.write("客户端，你好哈，我是服务器....");
    res.end();
})
// 在某个端口去监听来自浏览器的请求
server.listen(3000)





















