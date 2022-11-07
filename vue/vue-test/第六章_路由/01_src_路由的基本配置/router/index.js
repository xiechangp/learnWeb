// 引入VueRouter
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
// 引入 路由 组件
const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})
export default router;