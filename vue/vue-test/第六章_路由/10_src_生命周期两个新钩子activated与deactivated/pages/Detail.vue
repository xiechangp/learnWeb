<template>
  <ul>
      <!-- <li>id：{{$route.query.id}}</li>
      <li>标题：{{$route.query.title}}</li> -->
      <!-- <li>id：{{$route.params.id}}</li>
      <li>标题：{{$route.params.title}}</li> -->
      <li>id：{{id}}</li>
      <li>标题：{{title}}</li>
  </ul>
</template>

<script>
    export default {
        name:'Detail',
        mounted() {
            console.log(this);
        },
        props:['id','title']

} 
</script>
