<template>
  <div>
    <div>
      <h1>学校名称：{{SchoolName}}</h1>
      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" @getName="getName"></School>
    <!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据 （第一种写法 @ 或 b-on） -->
    <Student @getStudentName="getStudentName" @demo="demo" ></Student>
    <!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据 （第二种写法 ref） -->
    <!-- <Student ref="studen" /> -->
    <!-- 用原生 事件 需要加 native -->
    <!-- <Student @click.native="show" /> -->
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
    getName(name){
       this.SchoolName = name;
    },
    getSchoolName(name) {
      alert(name);
    },
    getStudentName(name,...b){
      alert(`${name},${b}`);
    },
    demo(name){
      alert(name);
    },
    // show(){
    //   alert('原生click')
    // }
  },
  // mounted() {
  //   this.$refs.studen.$on('getStudentName',this.getStudentName)
  // },
};
</script>
