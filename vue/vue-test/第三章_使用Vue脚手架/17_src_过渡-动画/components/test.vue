<template>
  <div>
      <button @click="isShow=!isShow" >显示/隐藏</button>
      <transition appear>
        <h1 class="demo" v-show="isShow">你好啊！！</h1>  
      </transition>
      
  </div>
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped> 
    .demo{
        background:yellow;
    }
    
    .v-enter-active{
        animation: toGo 1s;
    }
    .v-leave-active{
        animation: toGo 1s reverse;
    }

    @keyframes toGo {
        from{
            transform: translateX(-100%);
        }to{
            transform: translateX(0px);
        }
    }
</style>