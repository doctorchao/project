var http = require("http")
var url = require("url")
var querystring = require("querystring")

var server = http.createServer(function (req, res) {
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    var realUrl = "http://"+req.headers.host+req.url;
    var r = url.parse(realUrl)
    var qs = querystring.parse(r.query)
    console.info(qs)
    console.info(qs.name)
    res.end();
})
server.listen(3000)





















