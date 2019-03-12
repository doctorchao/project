var http = require("http")

var server = http.createServer(function (req, res) {
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    var u = req.url;
    switch (u){
        case "/":  // 首页面
            res.write("<h1>这是首页面</h1>")
            break;
        case "/user":
            res.write("<h1>这是用户管理页面</h1>")
            break;
        case "/login":
            res.write("<h1>这是用户登录页面</h1>")
            break;
        default:
            break;
    }
    res.end();
})

server.listen(3000)





















