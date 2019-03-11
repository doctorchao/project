// 异步写入
/* var fs = require("fs")
fs.writeFile("./in.txt","我是被写的",{"encoding":"utf-8"},function(err){
    if(err){
        console.log(err)
    }else{
        console.log("写入成功")
    }
})
fs.writeFile("./in.txt","我ye是被写的",{"encoding":"utf-8"},function(err){
    if(err){
        console.log(err)
    }else{
        console.log("写入成功")
    }
})*/
// 同步写入
var fs = require("fs")
var write = fs.writeFileSync("./in.txt","我被写了",{"encoding":"utf-8"})
if(!write){       // 函数没有返回语句 则返回undefined
    console.log("写入成功")
}