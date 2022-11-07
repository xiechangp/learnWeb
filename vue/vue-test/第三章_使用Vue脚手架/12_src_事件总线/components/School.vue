<template>
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ schoolAddress }}</h2>
    <h2>学生姓名：{{stuName}}</h2>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
      schoolName: "河池学院",
      schoolAddress: "河池",
      stuName:''
    };
  },
  mounted() {    
    this.$bus.$on('getBro',name=>this.stuName = name);
    this.$emit('getSchoolName',this.schoolName)
  },
  beforeDestroy() {
    this.$bus.$off('getBro')
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
