const express = require("express")
const app = express();
app.get("/", (req,res,next) => {
    console.log("第一个")
    res.end("周青蓉")
    next();
},(req,res) =>{
    console.log("第二个")
    res.end("包子")
})
app.listen(1111)