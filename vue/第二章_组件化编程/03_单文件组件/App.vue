<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import Student from './School.vue';
    import School from './Student.vue';

    export default {
        name:'App',
        components:{
            Student,
            School
        }
}
</script>
