<template>
  <div>
     <h1>当前求和为：{{sum}}</h1>
     <select v-model.number="n">
       <option :value="1">1</option>
       <option :value="2">2</option>
       <option :value="3">3</option>
     </select>
     <button @click="increment">+</button>
     <button @click="decrement">-</button>
     <button @click="incrementOdd">当前求和奇数再加</button>
     <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
   name:'Count',
   data() {
     return {
       n:1, // select 默认值
       sum:0, // 当前求和值
     }
   },
  methods: {
    // 减法
    increment(){
      this.sum+=this.n
    },
    // 加法
    decrement(){
      this.sum-=this.n
    },
    // 当前求和奇数再加
    incrementOdd(){
      if(this.sum % 2){
        this.sum+=this.n
      }
    },
    // 等一等再加
    incrementWait(){
      setTimeout(() => {
        this.sum+=this.n
      }, 1000);
    }
  },
}
</script>

<style> 
    button{
      margin: 5px;
    }
</style>