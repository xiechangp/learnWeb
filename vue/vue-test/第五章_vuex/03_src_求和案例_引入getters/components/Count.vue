<template>
  <div>
     <h1>当前求和为：{{$store.state.sum}}</h1>
     <h1>当前求和放大10倍：{{$store.getters.bigSum}}</h1>
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
     }
   },
  methods: {
    // 加法
    increment(){
      this.$store.commit('JIA', this.n);
    },
    // 减法
    decrement(){
      this.$store.commit('JIAN', this.n);
    },
    // 当前求和奇数再加
    incrementOdd(){
      this.$store.dispatch('jiaOdd', this.n);
    },
    // 等一等再加
    incrementWait(){
      this.$store.dispatch('jiaWait', this.n);
    }
  },
  mounted() {
    console.log(this.$store);
  },
}
</script>

<style> 
    button{
      margin: 5px;
    }
</style>