<template>
  <div>
     <h1>当前求和为：{{sum}}</h1>
     <h3>当前求和放大10倍：{{bigSum}}</h3>
     <h3>我在{{school}},学习{{subject}}</h3>
     <select v-model.number="n">
       <option :value="1">1</option>
       <option :value="2">2</option>
       <option :value="3">3</option>
     </select>
     <button @click="increment(n)">+</button>
     <button @click="decrement(n)">-</button>
     <button @click="incrementOdd(n)">当前求和奇数再加</button>
     <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
   name:'Count',
   data() {
     return {
       n:1, // select 默认值
     }
   },
  computed: {
    // 借助mapState生成计算属性  从 state 中获取数据（对象写法）
    // ...mapState({sum:'sum',school:'school',subject:'subject'}),
    // 借助mapState生成计算属性 从state中获取数据（数组写法）
    ...mapState(['sum','school','subject']),

    // 借助mapGetters生成计算属性，从getters中获取数据（对象写法）
    // ...mapGetters({'bigSum':'bigSum'})
    // 借助mapGetters生成计算属性，从getters中获取数据（数组写法）
    ...mapGetters(['bigSum'])

  },
  methods: {
    // 常规写法
    // 加法
    // increment(){
    //   this.$store.commit('JIA', this.n);
    // },
    // // 减法
    // decrement(){
    //   this.$store.commit('JIAN', this.n);
    // },

    // 通过mapMutations创建对应的方法，方法中会调用commit联系mutations （对象写法）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    // 通过mapMutations创建对应的方法，方法中会调用commit联系mutations （数组写法）
    // ...mapMutations(['increment','decrement']),

    // 当前求和奇数再加
    // incrementOdd(){
    //   this.$store.dispatch('jiaOdd', this.n);
    // },
    // // 等一等再加
    // incrementWait(){
    //   this.$store.dispatch('jiaWait', this.n);
    // }
    // 通过mapActions创建对应的方法，方法中会调用dispath联系（对象写法）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    // 通过mapActions创建对应的方法，方法中会调用dispath联系（数组写法）
    // ...mapActions(['jiaOdd','jiaWait'])
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