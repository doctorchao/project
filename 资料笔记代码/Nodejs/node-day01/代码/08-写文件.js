const fs = require("fs")

// fs.writeFile("./out.txt","helloworld",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("写入成功了....")
//     }
// });

var res = fs.writeFileSync("./out.txt","88888888888888")
if(!res){
    console.log("写入成功了。。。")
}
