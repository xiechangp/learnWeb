<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>
    
<script>
export default {
    name:Student,
    data() {
        return {
            name: "Jack",
            age:18
        };
    },
}
</script>

<style>
    .demo{
        color: green;
        font-size: 36px;
        font-weight: 500;
    }
</style>