const http = require("http")
const url = require("url")  // 作用是解析原生的url,把原生的url转变成对象
const querystring = require("querystring")  // 作用是解析查询字符串，把查询字符串转成对象
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    var realurl = url.parse(req.url)
    var realquery = querystring.parse(realurl.query)
    console.log(realquery.name)
}).listen(1111);
