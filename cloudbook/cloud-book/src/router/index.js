import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// export default new Router({
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: () => import('@/views/layout'),
      children: [
        {
          path: 'index',
          name: 'index',
          meta: {
            title: '首页'
          },
          component: () => import('@/views/index')
        },
        {
          path: 'center',
          name: 'center',
          mata: {
            title: '个人中心'
          },
          component: () => import ('@/views/person')
        },
        {
          path: 'study',
          name: 'study',
          mata: {
            title: '我的学习'
          },
          component: () => import ('@/views/study')
        },
      ]
    },
    {
      path: '/details/:id',
      name: 'details',
      mata: {
        title: ''
      },
      component: () => import('@/views/details'),
    },
    {
      path: '/titles/:id', // 不传这个刷新后不出来东西
      name: 'titles',
      meta: {
        title: '目录'
      },
      component: () => import('@/views/titles')
    },
    {
      path: '/article/:id',
      name: 'article',
      meta: {
        title: ''
      },
      component: () => import('@/views/article')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录页面'
      },
      component: () => import('@/views/login')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: '注册页面'
      },
      component: () => import('@/views/register')
    },
    {
      path: '/change',
      name: 'change',
      meta: {
        title: '个人信息'
      },
      component: () => import('@/views/information')
    },
    {
      path: '/muchbook/:id',
      name: 'muchbook',
      meta: {
        title: ''
      },
      component: () => import('@/views/muchbook')
    },
  ]
})

router.beforeEach((to, from, next) => {
  let title = to.meta.title
  document.title = title
  next()
})

export default router
