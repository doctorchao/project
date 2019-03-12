var http = require("http")
var fs = require("fs")

http.createServer(function (req, res) {
    var dir = __dirname + req.url;
    console.info(dir)
    fs.readFile(dir,function (err, data) {
        if (err){
            console.info(err)
        }else {
            res.statusCode = 200;
            res.write(data);
            res.end()
        }
    })
}).listen(3000)
















