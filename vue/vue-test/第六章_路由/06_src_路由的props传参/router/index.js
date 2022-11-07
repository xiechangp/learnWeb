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
            name:'about',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                name:'message',
                path:'message',
                component:Message,
                children:[
                    {
                        name:'detail',
                        // path:'detail/:id/:title',  //使用params 必须携带参数
                        path:'detail',  //使用 query
                        component:Detail,
                        // props:{id:'004',title:'吃饭'}
                        //props:true // 仅限于 params传参方式
                        // 通用
                        props(route){
                            return {
                                id:route.query.id,
                                title:route.query.title,
                            }
                        }
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