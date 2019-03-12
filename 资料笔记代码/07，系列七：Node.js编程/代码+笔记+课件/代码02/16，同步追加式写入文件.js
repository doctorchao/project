var fs = require("fs");

var res = fs.appendFileSync("my.js","呵呵..");
console.info(res)