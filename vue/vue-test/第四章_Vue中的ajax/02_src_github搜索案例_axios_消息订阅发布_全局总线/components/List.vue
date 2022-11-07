<template>

    
   <div class="row">
        <!-- 欢迎词 -->
        <h1 v-show="info.isFirst">欢迎光临</h1>
        <!-- 加载中 -->
        <h1 v-show="info.isLoading">加载中......</h1>
        <!-- 加载失败 -->
        <h1 v-show="info.errMsg">加载失败：{{info.errMsg}}</h1>
        <!-- 用户信息展示 -->
        <div class="card" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>      
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'List',
    data() {
        return {
           info:{
            isFirst:true,
            isLoading:false,
            errMsg:'',
            users:[],
           }
        }
    },
    mounted() {
        // 事件总线
      /*   this.$bus.$on('updateListData',(dataObj)=>{
            // this.info = dataObj
            this.info = {...this.info,...dataObj}
        }); */
        // 消息订阅/发送
        this.subId = pubsub.subscribe('updateListData',(mag,dataObj)=>{
          this.info = {...this.info,...dataObj}
        })
    },
    beforeDestroy() {
      // 关闭事件总线
      // this.$bus.$off('updateListData');
      // 取消订阅
      pubsub.unsubscribe(this.subId)
    },
}
</script>


<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>