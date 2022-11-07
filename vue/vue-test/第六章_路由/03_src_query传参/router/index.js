// 引入VueRouter
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
// 引入 路由 组件
const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                path:'message',
                component:Message,
                children:[
                    {
                        path:'detail',
                        component:Detail
                    }    
                ]
                },
                {
                    path:'news',
                    component:News
                }
            ]
        }
    ]
})
export default router;