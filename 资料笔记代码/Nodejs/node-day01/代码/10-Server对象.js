const http = require("http");
// var server = http.createServer();
// server.on("request",function(req,res){
//     res.end("hello,nihao,app")
// })
var server = http.createServer(function(req,res){
    res.end("hello,nihao,app")
})
server.listen(3000)