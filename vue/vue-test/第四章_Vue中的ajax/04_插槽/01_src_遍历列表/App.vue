<template>
    
  <div class="container">
      <category title="美食" :listData="foods" />
      <category title="游戏" :listData="games" />
      <category title="电影" :listData="films" />
  </div>
</template>

<script>
import Category from './components/Category'
export default {
    name:'App',
    components:{
        Category
    },
    data() {
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
        games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        films:['《教父》','《拆弹专家》','《你好,李焕英》','《尚硅谷》']
      }
    },
}
</script>
<style scoped>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>
