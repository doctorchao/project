var http = require("http")

var server = http.createServer(function (req, res) {
    var u = req.url;
    console.info(u)
    res.end();
})

server.listen(3000)





















