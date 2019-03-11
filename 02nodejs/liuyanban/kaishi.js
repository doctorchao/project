const http = require("http");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const querystring = require("querystring");
http.createServer((req,res)=>{
    var dir = path.join(__dirname,req.url);
    console.log(dir);

    switch(req.url){
        case "/":
        case "/liuyan.html":
            var data1 = fs.readFileSync("liuyanban/index.html","utf-8");
            if(fs.existsSync("liuyanban/blog.txt")){
                var data2 = fs.readFileSync("liuyanban/blog.txt","utf-8");
                var posts = JSON.parse(data2);
                var html = ejs.render(data1,{data:posts});
            }else{
                var html = ejs.render(data1,{data:[]});
            };
            res.end(html);
        break;
        case "/save":
            var str = "";
            req.on("data",(chunk)=>{
                str += chunk;
            });
            req.on("end",()=>{
                var obj = querystring.parse(str);
                var post = {
                    title:obj.title,
                    author:obj.author,
                    content:obj.content,
                    time:new Date().toLocaleString(),
                };
                if(fs.existsSync("liuyanban/blog.txt")){
                    var data4 = fs.readFileSync("liuyanban/blog.txt","utf-8",);
                    var arr  = JSON.parse(data4);
                    // var str1 = JSON.parse(data4);
                    // var arr = [];
                    // arr.push(str1);
                }else{
                    var arr =[];
                };
                arr.push(post);
                fs.writeFileSync("liuyanban/blog.txt",JSON.stringify(arr),"utf-8");
                res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                res.end("<h1>发表成功 <a href='/'>返回首页</a></h1>")
                // res.end("<h1>发布成功</h1> <a href='/'><strong>返回首页<strong></a>");
            });
            break;
            default:
            if(fs.existsSync(dir)&&fs.statSync(dir).isFile()){
                fs.readFile(dir,(err,data5)=>{
                    if(err) return
                    res.end(data5);
                });
            };
    };
}).listen(1111);