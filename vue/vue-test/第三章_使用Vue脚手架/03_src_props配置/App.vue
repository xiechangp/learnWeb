<template>
  <div>
     <Student name="Jack" sex="男" :age="18"></Student>
     <Student name="" sex="男"></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        Student
    },

}
</script>
