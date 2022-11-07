<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import Student from './components/School';
    import School from './components/Student';

    export default {
        name:'App',
        components:{
            Student,
            School
        }
}
</script>
