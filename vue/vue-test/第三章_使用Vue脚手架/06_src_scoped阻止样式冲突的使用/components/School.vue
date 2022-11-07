<template>
  <div class="demo">
    <h1 class="bg">河池学院</h1>
    <h3>学校名称：{{ name | mySlice }}</h3>
    <h3>学校地址：{{ address }}</h3>
  </div>
</template>

<script>


export default {
  name: "Student",
  data() {
    return {
     name:"河池学院",
     address:"宜州"
    };
  },

  }
</script>

<style lang="less" scoped>
      .demo{
        width: 400px;
        border: 1px solid yellow;
        color: bisque;
        text-align: center;
        .bg{
          background-color: rgb(87, 158, 151);
        }
      }
</style>
