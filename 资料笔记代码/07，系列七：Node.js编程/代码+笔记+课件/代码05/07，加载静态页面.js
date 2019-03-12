var http = require("http")
var fs = require("fs")
var ejs = require("ejs")
http.createServer(function (req, res) {
    // 假如从数据库中取出了如下数据：
    var dog = {
        name:"wangcai",
        age:1000
    }
    var str = fs.readFileSync("06，index.html","utf-8")
    var aa = ejs.render(str,{data:dog})
    res.end(aa)
}).listen(3000)