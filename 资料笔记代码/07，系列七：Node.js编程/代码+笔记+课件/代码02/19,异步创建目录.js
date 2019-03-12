var fs = require("fs");

fs.mkdir("imgs",function (err) {
    if (err){
        console.info(err)
    }else {
        console.log("创建成功了...")
    }
})