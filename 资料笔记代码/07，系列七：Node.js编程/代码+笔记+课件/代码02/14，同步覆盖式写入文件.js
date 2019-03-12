var fs = require("fs");

var res = fs.writeFileSync("my.js","呵呵..");
console.info(res)