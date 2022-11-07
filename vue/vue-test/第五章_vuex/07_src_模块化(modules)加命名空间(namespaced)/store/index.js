// 导入 Vue Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import countOptions from './count'
import personsOptions from './persons'
// 使用Vuex
Vue.use(Vuex)

// 创建 store 并 暴露 store
export default new Vuex.Store({
    modules:{
        countOptions,personsOptions
    }
})