import {nanoid} from 'nanoid'
import axios from 'axios'
export default{
    namespaced:true,
    actions: {
        addWang(context,val){
            if(val.name.indexOf('王') === 0){
                context.commit('ADD_WANG',val)
            }else{
                alert('请输入姓王的姓名！！');
            }
        },
        addNameServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social')
            .then(res => {
                console.log(res);
                context.commit('ADD_PERSON',{id:nanoid(),name:res.data})
            })
            .catch(err => {
                console.error(err); 
            })
        }
    },
    mutations: {
        ADD_PERSON(state, val) {
            state.persons.unshift(val);
            // console.log(val);
        },
        ADD_WANG(state,val){
            state.persons.unshift(val);
        }
    },
    state: {
        persons: [{
            id: '001',
            name: 'Jack'
        }, {
            id: '002',
            name: 'Lucy'
        }]
    },
    getters: {
        listFirst(state){
            return state.persons[0].name
        }
    }
}