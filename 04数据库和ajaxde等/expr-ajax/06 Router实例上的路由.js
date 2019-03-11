const express = require("express");
const app = express();
// const router = express.Router;
const xrouter = require("./07 路由实例上的路由")
app.use("/",xrouter)
app.listen(1112)
//get 拿来获取一个资源
//post 提交一个需要在数据库增加的资源
//options 跨域请求的时候会出现
//patch 针对服务器上某个资源进行修改（替换性修改）
//delete 删除数据库上的某个资源
//put 针对某个资源进行修改（部分修改）
//use 解析以上请求方法，选入