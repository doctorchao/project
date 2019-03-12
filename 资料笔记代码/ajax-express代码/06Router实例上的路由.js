// const express = require("express");
// const app = express();
// const pageRoutes = require("./07路由实例上的路由");
// console.log(pageRoutes)
// //get post options patch delete put

// //get 拿来获取一个资源
// //post 提交一个需要在数据库增加的资源
// //options 跨域请求的时候会出现
// //patch 针对服务器上某个资源进行修改（替换性修改）
// //delete 删除数据库上的某个资源
// //put 针对某个资源进行修改（部分修改）
// //use 解析以上请求方法，任意请求均会进入use
// app.use("/page", pageRoutes);





// app.listen(3000);

const express = require("express");
const app = express();
const router = express.Router()

app.use("/page",router.get("/index", (req, res,next) => {
    res.send(`
        <h1>我是主页</h1>
        <a href="/page/details">跳转到详情页</a>
    `)
}),router.get("/details",  (req, res) => {
    res.send(`
        <h1>我是详情页</h1>
        <a href="/page/index">跳转到主页</a>
    `)
}));

app.listen(3000);