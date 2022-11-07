<template>
  <div>
    <div>
    <h1>学校名称：{{SchoolName}}</h1>
    <School @getSchoolName="getSchoolName"></School>
    <Student></Student>
    </div>
    
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
  name: "App",
  components: {
    School,
    Student, 
  },
  data() {
    return {
      SchoolName:''
    }
  },
  methods: {
    getSchoolName(name){
      this.SchoolName = name
    }
  },
};
</script>
