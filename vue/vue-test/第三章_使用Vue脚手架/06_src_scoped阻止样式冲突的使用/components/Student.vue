<template>
  <div class="demo">
    <h1>大数据院学生信息</h1>
    <h3>学生名字：{{ name }}</h3>
    <h3>学生性别：{{ age }}</h3>
  </div>
</template>

<script>

export default {
  name: "Student",
  data() {
    return {
     name:"Jack",
     age:18
    };
  },

  }
</script>

<style scoped>
    .demo{
        width: 400px;
        border: 1px solid yellow;
        color: bisque;
        background-color: black;
         text-align: center;
    }
</style>