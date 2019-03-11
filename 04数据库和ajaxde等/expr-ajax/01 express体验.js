const express = require("express");
const app = express();
const path = require("path");
app.get("/",(req,res,next) =>{
    console.log(req.url);
    console.log("周青蓉")
    // res.send("周青蓉1");  不能发两次send
    // res.sendfile("02 发送post请求.html");
    res.sendfile(path.resolve(__dirname,"02 发送post请求.html"));
})
app.post("/post",(req,res,next) =>{
    res.send("收到post请求")    // 不能发两次
})
app.listen(1112)