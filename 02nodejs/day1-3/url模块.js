// const http = require("http");
// const server = http.createServer((req,res)=>{
//     console.log(req.url)
// });
// server.listen(3000);


// const http = require("http");
// const url = require("url");
// http.createServer((req,res)=>{
//     console.log(req.url);
//     console.log(url.parse(req.url));
//     var u = "http://"+req.headers.host+req.url;
//     console.log(u);
//     console.log(url.parse(u));
// }).listen(1111);

// 查询字符串
const http = require("http");
const url = require("url");
const querystring = require("querystring");
http.createServer((req,res)=>{
    // var realurl = "http://"+req.headers.host+req.url;  // 完整url
    var u = url.parse(req.url);                        // 转换为对象
    console.log(u);
    var qs = querystring.parse(u.query);               // 将url对象中查询字符串转换为对象
    console.log(qs);
    console.log(qs.name);
    console.log(qs.age);
}).listen(1111);
