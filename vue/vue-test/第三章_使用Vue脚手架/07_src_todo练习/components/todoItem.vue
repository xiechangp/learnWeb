<template>
  <li class="todoItem">
    <label>
      <input type="checkbox" :checked="todos.done" @change="handleCheak(todos.id)" />
      <!-- 不允许在这使用v-model 因为修改了props props是不可被修改的 -->
      <!-- <input type="checkbox" v-model="todos.done" /> -->
      <span>{{todos.item}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todos.id)" >删除</button>
  </li>
</template>

<script>
export default {
  name: "todoItem",
  props:['todos',"checkTodo","delTodo"],
  methods: {
    handleCheak(id){
        this.checkTodo(id)
    },
    handleDelete(id){
      // console.log(id);
      if(confirm(`确定删除${this.todos.item}`)){
        this.delTodo(id);
      }
    }
  },
};
</script>

<style scoped>
    /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  
  li label {
    float: left;
    cursor: pointer;
  }
  
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  
  li:before {
    content: initial;
  }
  
  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: #ddd;
  }

  li:hover button{
    display: block;
  }
</style>