<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <ul>
          <li v-for="(item, index) in listData" :key="index">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title','listData']
}
</script>

<style> 
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        background: orange;
        text-align: center;
    }
</style>