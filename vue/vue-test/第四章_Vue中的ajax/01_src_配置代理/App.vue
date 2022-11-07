<template>
<div>
  <button @click="getStudents">获取学生信息</button>
  <button @click="getCars">获取汽车信息</button>
</div> 
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods: {
    getStudents(){
      axios.get('http://localhost:8080/stu/students')
      .then(res => {
        console.log('请求成功了',res.data)
      })
      .catch(err => {
        console.error('请求失败了',err.message); 
      })
    },
    getCars(){
      axios.get('http://localhost:8080/car/cars')
      .then(res=>{
        console.log('请求成功了',res.data);
      })
      .catch(err=>{
        console.log('请求失败了',err.message);
      })
    }
  },
}
</script>

<style>
</style>
