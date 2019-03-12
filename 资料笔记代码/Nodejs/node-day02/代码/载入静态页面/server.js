var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");

var server = http.createServer(function (req, res) {
    var realurl = "http://" + req.headers.host + req.url; //获取完整的路由
    var oUrl = url.parse(realurl)
    switch(oUrl.pathname){
        case "/":
        case "/index":
        case "/index.html":
            fs.readFile("./index.html", "utf8", function (err, data) {//如果载入的静态页面中的css和js是使用外部链接的，则相当于请求了两次服务器
                if (err) throw err;
                res.end(data);
            })
            break;
        case "/list":
            fs.readFile("./list.html", "utf8", function (err, data) {
                if (err) throw err;
                res.end(data);
            })
            break;
        default:
            var filename = path.join(__dirname, oUrl.pathname) //获取文件完整路由
            if (fs.existsSync(filename)) {
                fs.readFile(filename, function (err, data) {
                    if (err) throw err;
                    res.end(data);
                })
            } else {
                res.end();
            }
            break;
    }
})

server.listen(3000)