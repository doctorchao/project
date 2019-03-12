
var fs = require("fs");

fs.stat("imgs",function (err, stats) {
    if (err){
        console.info(err)
    }else {
        console.log(stats)
    }
})



