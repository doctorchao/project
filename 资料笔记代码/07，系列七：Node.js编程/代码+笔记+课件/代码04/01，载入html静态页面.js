var http = require("http")
var fs = require("fs")
http.createServer(function (req, res) {
    fs.readFile("index.html",function (err, data) {
        if (err){
            console.info(err)
        }else {
            res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
            res.write(data);
            res.end()
        }
    })
}).listen(3000)
















