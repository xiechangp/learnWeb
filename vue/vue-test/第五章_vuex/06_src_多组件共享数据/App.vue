<template>
  <div>
    <Count/>
    <Persons/>
  </div>
</template>

<script>
import Count from "./components/Count";
import Persons from "./components/Persons";
export default {
  name: "App",
  components: {
    Count,Persons
  },
 
};
</script>
<style scoped>

</style>
