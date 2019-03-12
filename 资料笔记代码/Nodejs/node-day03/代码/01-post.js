const http = require("http")
const fs = require("fs")
const url = require("url")
const path = require("path")
const querystring = require("querystring")
http.createServer((req,res)=>{
    var urlObjct = url.parse(req.url)
    // console.log(urlObjct)
    switch(urlObjct.pathname){
        case "/login":
            fs.readFile("./login.html","utf-8",(err,data)=>{
                if(err) return
                res.write(data)
                res.end()
            });
            break;
        case "/sign":
            var str = "";
            req.on("data",chunk=>str += chunk)
            req.on("end",()=>{
                var strObjct = querystring.parse(str)
                console.log(strObjct.username)
                console.log(strObjct.pwd)
            })
            break;
            
    }
}).listen(3000)