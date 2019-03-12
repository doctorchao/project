var http = require("http");

http.get({"host":"www.baidu.com"},function (req) {
    var data = ""
    req.on("data",function (chunk) {
        data += chunk;
    })
    req.on("end",function () {
        console.info(data)
    })
})



















