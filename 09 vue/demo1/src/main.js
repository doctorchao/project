// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'// 引入vue
import App from './App'// 引入单文件组件
import router from './router'// 引入路由配置

Vue.config.productionTip = false
// vue配置，开发环境的配置， 声明现在在开发环境下

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 注入路由
  components: { App }, // 注册一个组件
  template: '<App/>'// 用注册组件去替代 #app dom元素
})
