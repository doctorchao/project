var fs = require("fs");

fs.exists("js",function (exists) {
    console.info(exists ? "存在" : "不存在")
})