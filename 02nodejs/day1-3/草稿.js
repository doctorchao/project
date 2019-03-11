// const http = require("http");
// const fs = require("fs");
// // const path = require("path");
// // const mime = require("mime");
// http.createServer((req,res)=>{
//     // var pathname = req.url;
//     // if(pathname = '/'){
//     //     pathname = '/静态.html';
//     // }
//     // var extname = path.extname(pathname);
//     fs.readFile("静态.html",{"encoding":"utf-8"},function(err,data){
//         if(err){
//             res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
//             res.write("访问错误");
//         }else{
//             res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
//             res.write(data);
//         }
//         res.end();
//     })
// }).listen(1111);
