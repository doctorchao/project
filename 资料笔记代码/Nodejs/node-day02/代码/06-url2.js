const http = require("http")
const url = require("url")
const qs = require("querystring")
http.createServer((req,res)=>{
    var realurl = url.parse("http://"+req.headers.host+":80"+req.url)
    var mqs = qs.parse(realurl.query)
    console.log(mqs.name)
}).listen(3000)