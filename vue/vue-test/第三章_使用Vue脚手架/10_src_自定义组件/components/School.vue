<template>
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ schoolAddress }}</h2>
    <button @click="sendSchoolName">把学校名字给App</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  props:["getSchoolName"],
  data() {
    return {
      schoolName: "河池学院",
      schoolAddress: "河池",
    };
  },
  methods: {
    sendSchoolName(){
      this.getSchoolName(this.schoolName);
    }
  },
      mounted() {
        this.$emit('getName', this.schoolName);
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
