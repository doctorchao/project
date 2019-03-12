
var fs = require("fs")

fs.readFile("../out.txt",{encoding:"utf8"},function (err,data) {
    if (err){
        console.info(err)
    }else {
        console.info(data)
    }
})










