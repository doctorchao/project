const express = require("express")
const router = express.Router()
router.get("/index",(req,res) =>{
    res.send(`
        <h1>主页</h1>
        <a href = "detail">跳转详情页</a>
    `)
})
router.get("/detail",(req,res) =>{
    res.send(`
        <h1>详情页</h1>
        <a href = "index">跳转主页</a>
    `)
})
module.exports = router;