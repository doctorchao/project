const http = require("http")
var cq = http.request({
    host:"www.baidu.com"
});
cq.end();