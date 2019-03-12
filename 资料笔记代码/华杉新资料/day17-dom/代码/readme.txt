复习：
    1，什么DOM？
        Document Object Model  文档对象模型

    2，DOM版本？
        DOM0，DOM1，DOM2，DOM3    关注DOM1,DOM2 
    
    3，DOM1中的内容？
        树模型：浏览器如果想渲染页面，需要把DOM元素构建成一个树模型。
        节点关系：parentNode
        两个标准方法：getElementById  getElementsByTagName

    4，DOM2中的内容？
        事件

    5，操作元素节点？
        创建元素：createElement
        插入元素：appendChild  insertBefore
        复制节点：cloneNode
        删除节点：removeClild
        替换节点：replaceClild

    6，操作属性节点？
        DOM0中操作属性节点：  div.id = "box"(设置)    div.id(获取)   只能获取或设置HTML中的标准属性，不能获取或设置自定义属性。

        DOM1：getAttribute()   setAttribute()

    7，操作文本节点？
        获取文本：innerHTML  innerText
        设置文本：div.innerHTML="hello"  div.innerText="hello"

    8，JS操作CSS？
        JS操作行内样式：JS操作style这个属性节点
        JS操作CSS类：className
        计算样式：
            标准浏览器（window.getComputeStyle()）
            IE(currentStyle)