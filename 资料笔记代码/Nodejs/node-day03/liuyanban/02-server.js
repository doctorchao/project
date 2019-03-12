const http = require("http")
const fs = require("fs")
const ejs = require("ejs")
var port = 3000
http.createServer((req,res)=>{
    // 模块一条真实的数据
    var div = {
        "item":"这是一个真实的数据，数据是从数据库获取的..."
    }
    var str = fs.readFileSync("./01-index.html","utf-8");
    console.log(str)
    var html = ejs.render(str,{data:div})
    res.end(html);







}).listen(port,()=>{
    // console.log("服务器已经在"+port+"端口已经运行起来了...")
    console.log(`服务器已经在${port}端口已经运行起来了...`)
})