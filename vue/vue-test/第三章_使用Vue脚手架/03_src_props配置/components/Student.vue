<template>
  <div class="demo">
    <h1>大数据院学生信息</h1>
    <h3>学生名字：{{ name }}</h3>
    <h3>学生性别：{{ sex }}</h3>
    <h3>学生年龄：{{ myAge }}</h3>
    <button @click="updateAge">年龄加1</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      myAge:this.age
    };
  },
  methods:{
    updateAge(){
      this.myAge++
    }
  }
  ,

  // 声明接收
  //props:['name','sex','age'] 

  // 接收的同时，对类型进行限制
  /* props:{
    name:String,
    age:Number,
    sex:String
  } */

  // 接收的同时，对类型进行限制，指定默认值，设置必要属性
  props:{
    name:{
      type:String,
      required:true // name是必要的
    },
    age:{
      type:Number,
      default:99
    },
    sex:{
      type:String,
      required:true
    }
  }

};
</script>
:99
<style>
    .demo{
        width: 400px;
        border: 1px solid yellow;
        color: bisque;
        background-color: black;
         text-align: center;
    }
</style>