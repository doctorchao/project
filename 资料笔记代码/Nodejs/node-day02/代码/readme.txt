复习：
    1，什么是node.js?
        答：就是js的一个runtime。

    2，学习node，说白了就是学习一些模块。

    3，模块分类：
        系统模块，官方文档。 在node中，也就30个左右
        用户模块：
            第三方模块：npm网站
            自定义模块：创建模块，导出模块，别人导入模块，使用模块
    4，文件系统：fs 
        文件和文件夹的操作：CRUD
    5，http模块：
        http协议：http请求，http响应
        如何创建一台服务器：var server = http.createServer(), 服务器需要处理请求，给出响应
        监听一个端口（1024~65535）：server.listen(3000)
        监听客户端的请求：server.on("request",function(req,res){});
        经典代码：
            const http = require("http");
            http.createServer((req,res)=>{
                ....
            }).listen;

    6，http请求：请求行，请求头，请求正文     http响应：状态行，响应头，响应正文

    7，学习http，需要把握住三个对象：Server，ServerResponse，ClientRequest

    8，ServerResponse中有很我的方法和属性：
        write:写入响应正文
        end:线束响应
        writeHead:写入响应头，content-type:text/html;charset=utf-8

进程和线程：
    一个项目就是一个进程，在一个进程中可以有一个或多个线程，真正干活是线程。

浏览器是多进程：
    主进程
    渲染进程：css线程，js线程，事件线程，定时器线程，请求数据线程
    GUI进程

浏览器加载一个页面的顺序：
    在地址栏中输入一个url
    主进程启动一个下载线程，去服务器要数据
    数据拿回来后，交给了渲染进程了
    渲染进程中的css线程开始干活，搞一个dom树，搞一个style Tree，合并，绘制，显示。
    然后，渲染进程中的js线程开始干活，处理js代码

    css线程和js线程是互斥，如果你先让js线程干活，如果js代码比较多的话，会阻se页面。

事件环：
    事件环分浏览器中的事件环，和Node中的事件环，这个两事件环，区别非常大。

JS是单线程，这里的单线程是指它的主线程（JS引擎线程）是单线程，在JS中还有很多子线程（事件线程，定时器线程）。

JS代码还分同步和异步：大部分情况下，使用到了JS的子线程，都是异步。代码是同步还是异步，不是说程序员说了算的，是JS发明者在当初设计JS的时候，就规定死了。


浏览器中的事件环：

https://juejin.im/post/5a6547d0f265da3e283a1df7
https://juejin.im/entry/58afa0d71b69e600589d2139
https://juejin.im/post/5a7bf0acf265da4e9449a4b1







https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=324321744,754328688&fm=202&mola=new&crop=v1

https://code.visualstudio.com/docs/?dv=win













