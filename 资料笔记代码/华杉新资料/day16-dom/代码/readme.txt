DOM?
    Document Object Model 文档对象模型
        Document  HTML文档
        Object 元素对象
        Model  树模型

DOM---> DOM0 DOM1 DOM2 DOM3
    DOM1  DOM2   DOM0没用了   DOM3

节点关系：
    写的HTML代码，最后会形成一个DOM树，在DOM树上有节点关系
    父节点
    下一下兄弟
    上一下兄弟
    孩子节点
    第一个孩子
    最后一个孩子
    ...
    我们可以利用某个节点，再通过这个节点关系，得到另一个节点。
    节点关系，一般不用，原因：1兼容性有问题  2有些回车，换行，也会当作成一个节点，不好处理了。

    有一个节点关系，后面可能回用到，parentNode 

DOM1中有两个标准方式，来获取一个元素：
    getElementById()   通过id来获取一个元素
    getElementsByTabName()  通过标签名来获取多个元素（伪数组）

对于DOM中的节点，需要我们掌握三类：
    元素节点
    属性节点
    文本节点

    在DOM树模型上，只会出现元素节点和文本节点，属性节点不会出现DOM树模型上。

操作节点：
    操作元素节点
    操作属性节点
    操作文本节点

操作元素节点：
    创建  createElement             document.createElement(标签名);
    插入  appendChild，insertBefore  
          appendChild 追加到一个元素的最后面
          insertBefore  父节点.insertBefort(新添加的元素，指定的元素);
    复制  cloneNode
                div.cloneNode();  浅复制  浅copy
                div.cloneNode(true);  深复制  深copy
    删除  removeChild

    替换  replaceChild
         父节点.replaceChild(新的节点，老的节点);

操作属性节点：
    什么是属性？
        <h1 title="item" class="box" id="ok">hello</h1>
    
    注意一个问题： class="box"    由于class中JS中是一个关键字，在操作这个class属性节点时，需要把class换成className    for  ----> htmlFor

    直接使用对象.属性这种方式这是DOM0级提出的，只对html中定义的属性起作用；
    使用DOM 提供的一个方法getAttribute()和setAttribute()，这个是DOM1级提出的;


    DOM1中，通过getAttribute()来获取属性，setAttribute()来设置属性 

操作文本节点
    <h1>hello</h1>   hello就是文本节点
    innerHTML
    innerText
