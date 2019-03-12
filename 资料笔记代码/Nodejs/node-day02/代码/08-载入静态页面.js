const http = require("http")
const fs = require("fs")
http.createServer((req,res)=>{
    console.log(req.url)
    switch(req.url){
        case "/":
        case "/index.html":
            fs.readFile("./index.html","utf-8",(err,data)=>{
                if(err) return
                res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                res.write(data);
                res.end()
            })
            break;
        default:
            var dir = req.url;
            console.log(dir)
            if(fs.existsSync(dir) && fs.statSync(dir).isFile()){
                fs.readFile(dir,{encoding:"utf-8"},(err,data)=>{
                    if(err) return
                    res.write(data);
                    res.end()
                })
            }
    }
}).listen(3000)