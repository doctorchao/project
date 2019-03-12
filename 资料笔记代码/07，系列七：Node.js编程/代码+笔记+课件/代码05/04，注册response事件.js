var http = require("http");
// 创建clientRequest对象
var cr = http.request({
    host:"www.baidu.com"
});
cr.on("response",function (req) {
    console.log(req)
})
// 发出请求
cr.end()




















