// 导入 Vue Vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 使用Vuex
Vue.use(Vuex)
// 准备 actions——用于响应组件的动作
const actions = {
    jiaOdd(context,val){
        if(context.state.sum % 2){
            context.commit('JIA',val)
        }
    },
    jiaWait(context,val){
        setTimeout(() => {
            context.commit('JIA',val)
        }, 1000);
    }
};
// 准备 mutations——用于操作数据（state）
const mutations = {
    JIA(state,value){
        // console.log(state,value);
        state.sum += value;
    },
    JIAN(state,value){
        state.sum -= value;
    },

}
// 准备 state——用于存储数据
const state = {
    sum:0, // 当前求和值
}
// 准备 getters 用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
} 

// 创建 store 并 暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
