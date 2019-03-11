const http = require("http")
const fs = require("fs")
const ejs = require("ejs")
const path = require("path")
const querystring = require("querystring")
var port = 3000
http.createServer((req,res)=>{
    switch (req.url){
        case "/":
        case "/index":
            // file就是index.html的绝对路径
            var file = path.join(__dirname, "index.html");
            var datas = fs.readFileSync(file, "utf8")
            res.write(datas)
            res.end();
            break;
        case "/save":
            var str = "";
            req.on("data",function (chunk) {
                str += chunk;
            })
            req.on("end",function () {
                var obj = querystring.parse(str)
                // post就是一条留言了
                var post = {
                    title:obj.title,
                    author:obj.author,
                    content:obj.content,
                    time:new Date().toLocaleString()
                }
                if(fs.existsSync("blog.txt")){
                    var str1 = fs.readFileSync("blog.txt","utf-8");
                    var arr = JSON.parse(str1);
                }else{
                    var arr = [];
                }
                arr.push(post)
                fs.writeFile("blog.txt",JSON.stringify(arr),(err)=>{
                    if(err) return;
                    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
                    res.end("<h1>发表成功 <a href='/'>返回首页</a></h1>")
                })
            })
            break;
        default:
            // 读取图片， css， js
            var file = path.join(__dirname, req.url);
            if (fs.existsSync(file) && fs.statSync(file).isFile()){
                res.end(fs.readFileSync(file));
            }
            break;
    }
}).listen(port,()=>{
    // console.log("服务器已经在"+port+"端口已经运行起来了...")
    console.log(`服务器已经在${port}端口已经运行起来了...`)
})