<template>
  <div>
      <h2 v-text="msg" ref="title"></h2>
      <Student ref="stu"></Student>
      <button @click="getDom" >获取DOM</button>
  </div>
</template>

<script>
import Student from './components/School.vue'
export default {
    name:'App',
    components:{
        Student
    },
    data() {
        return {
            msg:"School"
        }
    },
    methods: {
        getDom(){
            console.log(this.$refs.title)
            console.log(this.$refs.stu)
        }
    },

}
</script>
