var http = require("http")
var fs = require("fs")
var ejs = require("ejs")

http.createServer(function (req, res) {

    // 连接数据库
    // 从数据库中取出新闻

    // 模拟出数据
    var obj = [
        {
            title:"1废瓶怎样不再成废品 专家呼吁试行饮料包装押金制"
        },{
            title:"2废瓶怎样不再成废品 专家呼吁试行饮料包装押金制"
        },{
            title:"3废瓶怎样不再成废品 专家呼吁试行饮料包装押金制"
        },{
            title:"4废瓶怎样不再成废品 专家呼吁试行饮料包装押金制"
        },{
            title:"5废瓶怎样不再成废品 专家呼吁试行饮料包装押金制"
        },{
            title:"6废瓶怎样不再成废品 专家呼吁试行饮料包装押金制"
        }
    ]

    var str = fs.readFileSync("08，index.html","utf-8")
    var aa = ejs.render(str, {data:obj})
    res.end(aa)

}).listen(3000)




















