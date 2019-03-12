
var fs = require("fs");
console.info("start.....")
fs.readFile("./out.txt",{encoding:"utf8"},function (err, data) {
    if (err){
        console.info(err)
    }else {
        console.info(data)
    }
})
console.info("end.....")
