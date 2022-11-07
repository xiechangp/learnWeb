<template>
    <div class="demo2">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>
    
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Student',
    data() {
        return {
            name: "Jack",
            age:18
        };
    },
}
</script>

<style>
    .demo2{
        color: green;
        font-size: 36px;
        font-weight: 500;
    }
</style>