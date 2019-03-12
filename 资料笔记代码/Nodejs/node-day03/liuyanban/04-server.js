const http = require("http")
const fs = require("fs")
const ejs = require("ejs")
var port = 3000
http.createServer((req,res)=>{
    var str = fs.readFileSync("./03-index.html","utf-8")
    var news = [
        {
            "newid":"1",
            "title":"这是新闻标题1",
            "img":"xxxxx",
            "des":"这是新闻1的详情内容"
        },
        {
            "newid":"2",
            "title":"这是新闻标题2",
            "img":"xxxxx",
            "des":"这是新闻2的详情内容"
        },
    ]
    var html = ejs.render(str,{data:news})
    res.end(html)
}).listen(port,()=>{
    // console.log("服务器已经在"+port+"端口已经运行起来了...")
    console.log(`服务器已经在${port}端口已经运行起来了...`)
})