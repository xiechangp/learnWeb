export default {
    install(Vue){
        // 全局过滤器
        Vue.filter('mySlice',function(val){
            return val.slice(0,2)
        });
        // 全局自定义指令
        Vue.directive('fbind',{
            // 指令与元素成功绑定时
            bind(el, binding, vnode) {
                el.value = binding.value;        
            },
            // 指令所在元素被插入页面时
            inserted(el, binding, vnode) {
                el.focus();
            },
            // 指令所在的模板被重新解析时
            update(el, binding, vnode, oldVnode) {
                el.value = binding.value;
            },
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                   x: 100,
                };
            },
        })

        // 给Vue原型上添加一个方法
        Vue.prototype.hello = ()=>alert('Hello')
    }
}