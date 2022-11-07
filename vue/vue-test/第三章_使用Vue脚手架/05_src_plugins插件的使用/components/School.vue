<template>
  <div class="demo">
    <h1>河池学院</h1>
    <h3>学校名称：{{ name | mySlice }}</h3>
    <h3 @click="test">学校地址：{{ address }}</h3>
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
  methods:{
    test(){
      this.hello();
    }
  }
  }
</script>
