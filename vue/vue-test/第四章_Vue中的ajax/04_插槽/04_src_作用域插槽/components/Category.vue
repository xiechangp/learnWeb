<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <slot :games="games">默认插槽</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
      data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好,李焕英》", "《尚硅谷》"],
    };
  },
}
</script>

<style> 
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3,h4,h2{
        background: orange;
        text-align: center;
    }
</style>