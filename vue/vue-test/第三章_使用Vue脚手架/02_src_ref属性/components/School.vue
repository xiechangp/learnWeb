<template>
  <div class="demo">
    <h1>学校信息</h1>
    <h3>学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "河池学院",
      address: "河池",
    };
  },
};
</script>

<style>
    .demo{
        width: 400px;
        border: 1px solid yellow;
        color: bisque;
        background-color: black;
         text-align: center;
    }
</style>