var  http = require("http")
var fs = require("fs")
var querystring = require("querystring")
http.createServer(function (req, res) {
    switch (req.url){
        case "/login":    // 登录页面
            fs.readFile("04，登录页面.html",function (err, data) {
                if (err){
                    console.info(err)
                }else {
                    res.statusCode = 200;
                    res.write(data)
                    res.end()
                }
            })
            break;
        case "/sigin":
            var data = "";
            req.on("data",function (chunk) {
                data += chunk;
            })
            req.on("end",function () {
                var obj = querystring.parse(data)
                res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
                res.write("你的用户名是："+obj.username+",你的密码是："+obj.pwd);
                res.end()
            })
            break;
    }
}).listen(3000)