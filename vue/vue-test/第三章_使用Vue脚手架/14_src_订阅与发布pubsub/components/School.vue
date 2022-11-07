<template>
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ schoolAddress }}</h2>
    <h2>学生姓名：{{stuName}}</h2>
  </div>
</template>

<script>

import pubsub from 'pubsub-js'

export default {
  name: "School",
  data() {
    return {
      schoolName: "河池学院",
      schoolAddress: "河池",
      stuName:''
    };
  },
  mounted() {    
    // this.$bus.$on('getBro',name=>this.stuName = name);
    this.$emit('getSchoolName',this.schoolName);
    // 订阅
    // pubsub.subscribe('getBro',() => console.log('订阅成功'))
    // pubsub.subscribe 回调第一个参数是订阅名 第二个是发布传过来的参数
    this.subID=pubsub.subscribe('getBro',(mag,data)=>this.stuName = data);
  },
  beforeDestroy() {
    // this.$bus.$off('getBro')
    // 取消订阅
    pubsub.unsubscribe(this.subID);
  },
};
</script>

<style scoped>
.demo {
  width: 400px;
  height: 150px;
  background: #ccc;
}
</style>
