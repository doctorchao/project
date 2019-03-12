var http = require("http")

var server = http.createServer(function (req, res) {
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    res.write("客户端，你好哈，我是服务器....");
    res.end();
})

server.listen(3000)





















