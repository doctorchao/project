const express = require("express");
const path = require("path");
const app = express();
app.get("/",(req,res,next) =>{
    res.sendfile("03 封装自己的ajax.html")
})
app.post("/post",(req,res,next) =>{
    res.send("post我是周青蓉")
})
app.get("/get",(req,res,next) =>{
    res.send("get我是周青蓉")
})
app.listen(1111)