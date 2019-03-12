
var fs = require("fs")
console.info("start.....")
var data = fs.readFileSync("./out.txt",{encoding:"utf8"})
console.log(data)
console.info("end.....")