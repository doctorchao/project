var http = require("http")
var path = require("path")
http.createServer((req,res)=>{
    var dir = path.join(__dirname,req.url)
    console.log(dir)
    res.end();
}).listen(3000)