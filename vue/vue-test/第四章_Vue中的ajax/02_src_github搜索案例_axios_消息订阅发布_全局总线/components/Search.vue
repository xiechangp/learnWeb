<template>
   <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input 
        type="text" 
        placeholder="enter the name you search"
        v-model="keyWord"
        />&nbsp;<button
        @click="searchUsers"
        >Search</button>

      </div>
    </section>
</template>

<script>
import axios from 'axios'
import pubsub from 'pubsub-js'
export default {
    name:'Search',
    data() {
        return {
            keyWord:''
        }
    },
    methods: {
        searchUsers(){
            // 请求前更新List的数据（事件总线）
            // this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]});

            // 请求前更新List的数据（消息发布）
            pubsub.publish('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
            axios.get(`https:/api.github.com/search/users?q=${this.keyWord}`)
            .then(res => {
                console.log('请求成功');
                // 请求成功后更新List的数据（事件总线）
                // this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:res.data.items});

                // 请求成功后更新List的数据（消息发布）
                pubsub.publish('updateListData',{isLoading:false,errMsg:'',users:res.data.items});
            })
            .catch(err => {
                // 请求失败后更新List的数据（事件总线）
                // this.$bus.$emit('updateListData',{isLoading:false,errMsg:err.message,users:[]});

                // 请求失败后更新List的数据（消息发布）
                pubsub.publish('updateListData',{isLoading:false,errMsg:err.message,users:[]});
            })
        }
    },
}
</script>

<style>

</style>