const http = require("http")
const fs = require("fs")

http.createServer((req,res)=>{
    var dir = __dirname + req.url;
    switch(req.url){
        case "/":
        case "/index.html":
            fs.readFile("./index.html",{encoding:"utf-8"},(err,data)=>{
                if(err) return
                res.write(data)
                res.end()
            })
            break;
        default:
            if(fs.existsSync(dir) && fs.statSync(dir).isFile()){
                fs.readFile(dir,"utf-8",(err,data)=>{
                    if(err) return
                    res.write(data)
                    res.end()
                })
            }
    }
}).listen(3030)
