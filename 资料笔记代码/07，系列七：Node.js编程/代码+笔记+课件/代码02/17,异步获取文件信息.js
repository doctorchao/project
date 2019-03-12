var fs = require("fs");

fs.stat("./my.js",function (err, stats) {
    if (err){
        console.info(err)
    }else{
        console.log(stats)
    }
})