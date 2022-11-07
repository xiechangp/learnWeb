<template>
   <ul class="todo-main">
          <todo-item 
          v-for="todo in todos" :key="todo.id" 
          :todos="todo" 
          :checkTodo="checkTodo" 
          :delTodo="delTodo"
          />             
    </ul>
</template>

<script>
import todoItem from './todoItem.vue'
export default {
    name:"todoList",
    components:{
        todoItem
    },
   props:["todos","checkTodo","delTodo"]
}
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