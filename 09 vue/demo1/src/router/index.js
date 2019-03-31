import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/components/page1'
// import page2 from '@/components/page2'    1

// 加载第一页时，所有的路由组件都已经down下来了，有可能造成浪费，这时引入异步加载路由组件
Vue.use(Router)// 安装相对应的插件

export default new Router({
  routes: [
    {
      path: '*', // 代表所有不在匹配列表的路由
      component: () => import('@/components/404')
    },
    {
      path: '/',
      name: 'page1', // 目前名字可有可无
      component: page1// 引入helloworld组件 替换<router-view/>
    },
    // {
    //   path:'/page2',    1
    //   name:'page2',
    //   component:page2
    // }
    {
      // path:'/page2',  2
      path: '/page2/:id',
      name: 'page2',
      // component:function(){
      //   return import('@/components/page2')
      // }
      // 要习惯写成异步路由加载
      component: () => import('@/components/page2')
    },
    {
      path: '/layout', // 代表所有不在匹配列表的路由
      name: 'layout',
      component: () => import('@/components/layout'),
      redirect: '/layout/page1',
      children:[
        {
          path: 'page1',
          component: page1
        },
        {
          path: 'page2',
          component: () => import('@/components/page2')
        }
      ]
    },
  ]
})
//  const router = new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
// export default router   hellowworld 改为了page1
