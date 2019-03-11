// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// http.createServer((req,res)=>{
//     var pathname = req.url;
//     console.log(pathname);
//     if(pathname == '/' || pathname == '/static.html'){
//         fs.readFile("day 02/static.html",{"encoding":"utf-8"},function(err,data){
//             if(err) return;
//             res.write(data);
//             res.end();
//         });
//     }
//      // var extname = path.extname(pathname);
        // var extname = extname.substring(1);
//     else{
//         fs.readFile(path.join(__dirname,pathname),function(err,data){
//             if(err){
//                 res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
//                 res.write("访问错误");
//             }else{
//                 res.write(data);
//                 res.end();
//             };
//         });
//     };
// }).listen(2222);        有误 。。

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
http.createServer((req,res)=>{
    var dir = path.join(__dirname,req.url);
    console.log(dir);
    switch(req.url){
        case "/":
        case "/static.html":
        fs.readFile("day 02/static.html",{"encoding":"utf-8"},function(err,data){
            if(err) return;
            res.write(data);
            res.end();
        });
        break;
        default:
            // if(fs.existsSync(dir)&&fs.statSync(dir).isFile()){
                fs.readFile(dir,(err,data)=>{
                    if(err) return
                    res.write(data)
                    res.end()
                });
            // };
    };
}).listen(1111);