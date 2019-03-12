const http = require("http")
const fs = require("fs")
const path = require("path")
http.createServer((req,res)=>{
    var dir = __dirname+req.url
    console.log(dir)
    switch(req.url){
        case "/":
        case "/index.html":
            console.log("-----------")
            fs.readFile("./index.html",{encoding:"utf-8"},(err,data)=>{
                if(err) return
                res.statusCode = 200
                res.write(data)
                res.end()
            })
            break;
        default:
            if(fs.existsSync(dir) && fs.statSync(dir).isFile){
                fs.readFile(dir,{encoding:"utf-8"},(err,data)=>{
                if(err) return
                    res.statusCode = 200
                    res.write(data)
                    res.end()
                })
            }
    }
    
    
}).listen(1111);