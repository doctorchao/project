var http = require("http")

var server = http.createServer(function (req, res) {
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
     res.end("你好，谢谢！！！");
})

server.listen(3000)





















