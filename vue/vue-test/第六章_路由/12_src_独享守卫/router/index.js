// 引入VueRouter
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
// 引入 路由 组件
const router = new VueRouter({
    routes: [{
            name: 'about',
            path: '/about',
            component: About,
            meta: {
                title: '关于'
            },
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: {
                title: '首页'
            },
            children: [{
                    name: 'message',
                    path: 'message',
                    component: Message,
                    meta: {
                        isAuth: true,
                        title: '消息'
                    },
                    children: [{
                        name: 'detail',
                        // path:'detail/:id/:title',  //使用params 必须携带参数
                        path: 'detail', //使用 query
                        component: Detail,
                        // props:{id:'004',title:'吃饭'}
                        //props:true // 仅限于 params传参方式
                        // 通用
                        meta: {
                            isAuth: true,
                            title: '详情'
                        },
                        props(route) {
                            return {
                                id: route.query.id,
                                title: route.query.title,
                            }
                        }
                    }]
                },
                {
                    name: 'news',
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: '新闻'
                    },
                    // 独享守卫
                    beforeEnter(to, from, next) {
                            if(to.meta.isAuth){
                                if(sessionStorage.getItem('school') === 'hcxy'){
                                    next();
                                }else{
                                    alert('没有权限');
                                }
                            }else{
                                next()
                            }
                    }
                }
            ]
        }
    ]
})

// 全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     // console.log(sessionStorage.getItem('school'));
//     // if(to.name === 'news' || to.name === 'message'){
//     if(to.meta.isAuth){
//         if(sessionStorage.getItem('school') === 'hcxy'){
//             next();
//         }else{

//             alert('没有权限');
//             // window.location.href = 'https://www.baidu.com'
//         }
//     }else{
//         next()
//     }
// })
// 全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    // console.log(document.title);
    // document.title = to.meta.title || '河池学院'
    if (to.meta.title) {
        document.title = to.meta.title;
    } else {
        document.title = '河池学院'
    }
})

export default router;