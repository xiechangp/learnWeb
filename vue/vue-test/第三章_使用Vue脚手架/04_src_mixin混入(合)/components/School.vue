<template>
  <div class="demo">
    <h1>河池学院</h1>
    <h3>学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
    <button @click="getName">获取名字</button>
  </div>
</template>

<script>
import {getName} from '../getName'

export default {
  name: "Student",
  data() {
    return {
     name:"河池学院",
     address:"宜州"
    };
  },
  mixins:[getName]
  }
</script>
