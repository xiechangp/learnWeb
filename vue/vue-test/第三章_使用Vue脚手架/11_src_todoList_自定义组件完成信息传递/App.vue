<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @itemAdd="itemAdd"></todo-header>
        <todo-list
          :todos="todos"
          :checkTodo="checkTodo"
          :delTodo="delTodo"
        ></todo-list>
        <todo-footer
          :todos="todos"
          @allCheaked="allCheaked"
          @clearCheaked="clearCheaked"
        ></todo-footer>
      </div>
    </div>
  </div>
</template>

<script>
import todoHeader from "./components/todoHeader.vue";
import todoItem from "./components/todoItem.vue";
import todoFooter from "./components/todoFooter.vue";
import TodoList from "./components/todoList.vue";
export default {
  name: "App",
  components: {
    todoHeader,
    todoItem,
    todoFooter,
    TodoList,
  },
  data() {
    return {
      // todos: [
      //   { id: "001", item: "抽烟", done: true },
      //   { id: "002", item: "喝酒", done: false },
      //   { id: "003", item: "打牌", done: true },
      // ],
      todos:JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  methods: {
    // 添加todo
    itemAdd(item) {
      this.todos.unshift(item);
    },
    // 切换勾选状态
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (id === todo.id) todo.done = !todo.done;
      });
    },
    // 删除选项
    delTodo(id) {
      this.todos = this.todos.filter((h) => h.id !== id);
    },
    // 全选 or 全不选
    allCheaked(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 清除勾选todo
    clearCheaked() {
      this.todos = this.todos.filter((t) => t.done !== true);
    },
  },
  watch: {
    todos: {
      deep:true,
      handler(val) {
        localStorage.setItem("todos",JSON.stringify(val))
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
