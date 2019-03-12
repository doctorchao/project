var fs = require("fs");

fs.appendFile("blog.txt","嘻嘻....",function (err) {
    if (err){
        console.info("写入失败...")
    }else {
        console.info("写入成功...")
    }
})