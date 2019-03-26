// var obj = require("./one");
import obj from "./one"   // es6语法模块引入
import img from "./ningque.jpg"
import "./index.css"
import Vue from "vue/dist/vue.esm"  //得这样引入vue
import App from "./app"
import page1 from './page1.vue';
import router from "./src/router/index"
// import vuerouter from "vue-router"
// Vue.use(vuerouter)    也可在index.js 引入

document.querySelector("h1").innerHTML = obj.text;

var myimg = document.createElement("img")
myimg.src=img
document.querySelector("#container").appendChild(myimg)

new Vue({
    router,
    el:"#app",
    data:{

    },
    components:{
        App,
        page1
    },
    template:"<App/>",
    // template:"<page1/>"   app实例里同时只可有一个模板替换
})

// 将图像添加到我们现有的 div。
// import Icon from './icon.png';

// var myIcon = new Image();
// myIcon.src = Icon;
// element.appendChild(myIcon);
