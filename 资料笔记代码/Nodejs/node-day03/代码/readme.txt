1，Server对象如何创建，如何创建一台服务器？
    const http = require("http")
    http.createServer((req,res)=>{
        ...
    }).listen(3000)

2，一个完整的url的格式？
    http://www.baidu.com:80/phone?price=1000#fsdaf

3，服务器的两大作用？
    A，处理请求
    B，给出响应

4，如何处理请求？
    主要是指处理url，获取url,通过req.url，获取得到的是一个字符串
    ，对于字符串的处理不方便，通常是把这个字符串转成一个对象，转化的
    过程，叫解析，parse。

5，如何把一个url字符串转成一个对象？
    通过一个系统模块，这个模块叫，url
    const url = require("url")
    const urlObjtct = url.parse(req.url)

6，如何得到上面url对象中的查询字符串？
    const qs = urlObjtct.query
    qs就是一个字符串，对于字符串的操作方便，通过需要把它转成对象

7，如何把一个查询字符串转成一个对象？
    还需要依赖一个系统模块，叫querystring
    const querystring = require("querystring")
    const qsObjct = querystring.parse(qs);

8，在拼接路径时，需要使用的一个模块？
    path   join   resolve
    const path = require("path")
    const realPath = path.join(__dirname,"XXX");

9，载入静态资源？
    第一步：创建一台服务器。
    第二步：处理请求，一般情况下，第一次请求都是index.html
    第三步：把index.html，返回给浏览器，浏览器发现index.html中有很多的二次请求，此时，浏览器又发出了N的二次请求
    第四步：服务器要处理这些二次请求，也就是把二次请求需要的文件，读取出来，给浏览器返回去
    第五步：浏览器拿到这一堆的数据，使用浏览器的渲染进程，把页面给渲染出来

    使用原生的node,写东西，代码量是非常多的，一般情况下，到公司里，全部是框架，在框架中载入静态资源，只需要一行代码。后面学习expres,koa,egg
    只有会框架，才代表你有生产力。

    为什么不直接对框架？

10，说一下，并行与并发？

11，说一下，什么是进程，什么是线程？

12，说一下，什么是同步，什么是异步？

13，说一下，什么是阻塞，什么是非阻塞？


