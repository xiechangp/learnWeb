<template>
    <div class="demo2">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">发送Name给School</button>
    </div>
</template>
    
<script>
export default {
    name:'Student',
    data() {
        return {
            name: "Jack",
            age:18
        }; 
    },
    methods: {
        sendStudentName(){
            this.$bus.$emit('getBro',this.name);
        }
    },
    
    
}
</script scoped> 

<style>
    .demo2{
        width: 400px;
        height: 150px;
        background: rgb(175, 125, 125);
    }
</style>