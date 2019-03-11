// 异步删除
var fs = require("fs")
fs.unlink("nodejs/in.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("删除成功")
    }
})
// 同步删除
var fs = require("fs")
var del = fs.unlinkSync("nodejs/in.txt")
if(!del){
    console.log("删除成功")
}