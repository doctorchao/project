const http = require("http")
const fs = require("fs")
const path = require("path")
const querystring = require("querystring")
const ejs = require("ejs")

http.createServer(function (req, res) {
    switch (req.url){
        case "/":
        case "/index":
            // file就是index.html的绝对路径
            var file = path.join(__dirname, "index.html");
            var datas = fs.readFileSync(file, "utf8")

            // 读取blog.txt中的内容
            var blogData = fs.readFileSync("blog.txt","utf-8");
            var posts = JSON.parse(blogData)
            var html = ejs.render(datas, {data:posts})
            res.end(html);
            break;

        case "/save":
            var str = "";
            req.on("data",function (chunk) {
                str += chunk;
            })
            req.on("end",function () {
                var obj = querystring.parse(str)
                var post = {
                    title:obj.title,
                    author:obj.author,
                    content:obj.content,
                    time:new Date().toLocaleString()
                }
               // 有多条留言  一个留言是一个post对象，多条留言，就把对象放到一个数组中
                // blog.txt文件存在
                if (fs.existsSync("blog.txt")){
                    // 存在， 先取出blog.txt中的内容，转化成对象，放入到数组中
                    var str1 = fs.readFileSync("blog.txt","utf-8");
                    var arr = JSON.parse(str1);
                }else {  // blog.txt不存在
                    var arr = [];
                }
                arr.push(post)
                // 再将arr转化成字符串，覆盖式地写入到blog.txt文件中
                fs.writeFile("blog.txt",JSON.stringify(arr),function (err) {
                    if (err){
                        console.log(err)
                    }else {
                        res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
                        res.end("<h1>发表成功 <a href='/'>返回首页</a></h1>")
                    }
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
}).listen(3000)

















