// 异步追加
var fs = require("fs")
fs.appendFile("./in.txt","我是被写的",{"encoding":"utf-8"},function(err){
    if(err){
        console.log(err)
    }else{
        console.log("写入成功")
    }
})
fs.appendFile("./in.txt","我ye是被写的",{"encoding":"utf-8"},function(err){
    if(err){
        console.log(err)
    }else{
        console.log("写入成功")
    }
})
// 同步追加
var fs = require("fs")
var write = fs.appendFileSync("./in.txt","我被写了",{"encoding":"utf-8"})
if(!write){
    console.log("写入成功")
}