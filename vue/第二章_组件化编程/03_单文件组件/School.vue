<template>
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ schoolAddress }}</h2>
    <button @click="getSchoolName">获取学校名</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: "河池学院",
      schoolAddress: "河池",
    };
  },
  methods: {
    getSchoolName() {
      alert(this.getSchoolName);
    },
  },
};
</script>

<style>
.demo {
  width: 300px;
  height: 200px;
  background: #ccc;
}
</style>
