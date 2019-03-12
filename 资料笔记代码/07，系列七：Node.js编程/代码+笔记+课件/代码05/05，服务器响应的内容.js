var http = require("http");
// 创建clientRequest对象
var cr = http.request({
    host:"www.baidu.com"
});
cr.on("response",function (req) {
    var data = ""
    req.on("data",function (chunk) {
        data += chunk;
    })
    req.on("end",function () {
        console.info(data)
    })
})
// 发出请求
cr.end()




















