<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <slot>默认插槽</slot>
      <!-- <ul>
          <li v-for="(item, index) in listData" :key="index">{{item}}</li>
      </ul> -->
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title']
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
// 视频：http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4
// 图片：https://s3.ax1x.com/2021/01/16/srJ1q9.jpg