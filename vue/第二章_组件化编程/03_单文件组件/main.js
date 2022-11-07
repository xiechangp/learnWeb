/* 
关于不同版本的Vue:
1.vue.js与vue.runtime.xxx.js的区别：
    (1).Vue.js是完整版的Vue,包含：核心功能+模板解析器。
    (2).vue.runtime.xxx,js是运行版的Vue,只包含：核心功能：没有模板解析器.
2.因为vue.runtime.xXx,js没有模板解析器，所以不能使用template配置项，需要使用
    render函数按收到的createElement函法指定具体内容.
*/

import App from './App.vue'
new Vue({
    el:"#root",
    template:`<App></App>`,
    components:{
        App
    }
})