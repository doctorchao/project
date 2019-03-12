
var fs = require("fs");

fs.readdir("./css",function (err, files) {
    if (err){
        console.info(err)
    }else {
        console.info(files)
    }
})




