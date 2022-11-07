// 求和模块
export default{
    namespaced:true,
    actions: {
        jiaOdd(context, val) {
            if (context.state.sum % 2) {
                context.commit('JIA', val)
            }
        },
        jiaWait(context, val) {
            setTimeout(() => {
                context.commit('JIA', val)
            }, 1000);
        }
    },
    mutations: {
        JIA(state, value) {
            // console.log(state,value);
            state.sum += value;
        },
        JIAN(state, value) {
            state.sum -= value;
        }
    },
    state: {
        sum: 0, // 当前求和值
        school: '河池学院',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

// export default countOptions;