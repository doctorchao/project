import Router from 'vue-router';
// import index from '@/views/index.vue';
import index from '../views/index.vue';
import Vue from 'vue/dist/vue.esm';

Vue.use(Router);  // 也可在主页 main 引入

const router = new Router({
    routes:[
        {
            path:"/",
            component:index
        },
        {
            path: "/second",
            component: () => import('../views/second.vue')
        }
    ]
})
export default router;