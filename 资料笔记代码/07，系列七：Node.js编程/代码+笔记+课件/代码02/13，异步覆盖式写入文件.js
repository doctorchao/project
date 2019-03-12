var fs = require("fs");

fs.writeFile("blog.txt","哈哈哈....",function (err) {
    if (err){
        console.info("写入失败...")
    }else {
        console.info("写入成功...")
    }
})