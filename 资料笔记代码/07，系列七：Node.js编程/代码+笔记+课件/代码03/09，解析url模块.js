var http = require("http")
var url = require("url")

var server = http.createServer(function (req, res) {
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    var r = url.parse(req.url)
    console.info(r)
    res.end();
})

server.listen(3000)





















