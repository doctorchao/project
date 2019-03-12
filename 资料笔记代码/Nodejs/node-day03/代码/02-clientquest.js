const http = require("http")
var cq = http.request({
    host:"www.baidu.com"
});
cq.end();
cq.on("response",(rs)=>{
    // console.log(rs)
    var str = "";
    rs.on("data",chunk=>str+=chunk)
    rs.on("end",()=>{
        console.log(str)
    })
})