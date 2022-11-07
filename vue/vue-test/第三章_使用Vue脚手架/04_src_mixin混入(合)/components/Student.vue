<template>
  <div class="demo">
    <h1>大数据院学生信息</h1>
    <h3>学生名字：{{ name }}</h3>
    <h3>学生性别：{{ age }}</h3>
    <button @click="getName">获取名字</button>
  </div>
</template>

<script>
import {getName} from '../getName'
export default {
  name: "Student",
  data() {
    return {
     name:"Jack",
     age:18
    };
  },
  mixins:[getName]
  }
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