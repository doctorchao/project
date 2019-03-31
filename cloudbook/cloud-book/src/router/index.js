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
        }
      ]
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('@/views/details'),
      mata: {
        title: '书籍详情'
      }
    },
    {
      path: '/titles/:id',
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
        title: '文章详情'
      },
      component: () => import('@/views/article')
    }
  ]
})

router.beforeEach((to,from,next) => {
  let title = to.meta.title
  document.title = title
  next()
})

export default router
