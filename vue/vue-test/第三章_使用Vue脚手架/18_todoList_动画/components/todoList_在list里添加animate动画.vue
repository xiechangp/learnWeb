<template>
  <ul class="todo-main">
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeInDown"
      leave-active-class="animate__fadeOutRight"
    >
      <todo-item v-for="todo in todos" :key="todo.id" :todos="todo" />
    </transition-group>
  </ul>
</template>

<script>
import todoItem from "./todoItem.vue";
export default {
  name: "todoList",
  components: {
    todoItem,
  },
  props: ["todos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
