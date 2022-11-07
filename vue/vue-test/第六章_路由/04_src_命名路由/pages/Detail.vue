<template>
  <ul>
      <li>id：{{$route.query.id}}</li>
      <li>标题：{{$route.query.title}}</li>
  </ul>
</template>

<script>
    export default {
        name:'Detail',
        mounted() {
            console.log(this);
        },

}
</script>
