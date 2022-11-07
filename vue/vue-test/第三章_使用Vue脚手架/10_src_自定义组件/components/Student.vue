<template>
    <div class="demo2">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <h2>{{n}}</h2>
        <button @click="addN" >n++</button>
        <button @click="sendStudentName" >把学生名字给App</button>
        <button @click="unbind">解绑sendStudentName事件</button> 
    </div>
</template>
    
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Student',
    data() {
        return {
            name: "Jack",
            age:18,
            n:1
        }; 
    },
    methods: {
        addN(){
            this.n++
            console.log(111);
        },
        sendStudentName(){
            console.log(1111);
            this.$emit('getStudentName', this.name,99,90,80);
            this.$emit('demo', this.name);
        },
        unbind(){
            //this.$off('getStudentName') //只适用于解绑一个自定义事件
            //this.$off(['getStudentName','demo']) //只适用于解绑多个自定义事件
            //this.$off() // 解绑所有的
            this.$destroy(); // 销毁后会实例对象的自定义事件 都不会奏效
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