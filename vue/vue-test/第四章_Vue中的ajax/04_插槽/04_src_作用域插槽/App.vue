<template>
  <div class="container">
    
    <category title="游戏">
      <template slot-scope="{games}">
        <ul >
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      </template>
    </category>
    <category title="游戏">
      <template scope="{games}">
        <ol style="color: red;">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ol>
      </template>
    </category>
    <category title="游戏">
      <template slot-scope="{games}">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: {
    Category,
  },

};
</script>
<style scoped>
.container,
.footer {
  display: flex;
  justify-content: space-around;
  
}
img {
  width: 100%;
}
video {
  width: 100%;
}

</style>
