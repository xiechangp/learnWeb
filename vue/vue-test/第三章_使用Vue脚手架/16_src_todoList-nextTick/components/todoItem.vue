<template>
  <li class="todoItem">
    <label>
      <input
        type="checkbox"
        :checked="todos.done"
        @change="handleCheak(todos.id)"
      />
      <!-- 不允许在这使用v-model 因为修改了props props是不可被修改的 -->
      <!-- <input type="checkbox" v-model="todos.done" /> -->
      <span v-show="!todos.edit">{{ todos.item }}</span>
      <!-- <input v-show="todos.edit" type="text" v-model="value" @blur="handleBlur(todos)"> -->
      <!-- <input v-show="todos.edit" type="text" @blur="handleBlur($event,todos)"> -->
      <input
        v-show="todos.edit"
        type="text"
        :value="todos.item"
        @blur="handleBlur($event, todos)"
        @keyup.enter="handleEnter($event, todos)"
        ref="itemFocus"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todos.id)">删除</button>
    <button class="btn btn-sky" v-show="!todos.edit" @click="handleEdit(todos)">编辑</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "todoItem",
  props: ["todos"],
  data() {
    return {
      // value:this.todos.item
    };
  },
  methods: {
    // 勾选
    handleCheak(id) {
      // this.checkTodo(id)
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      // console.log(id);
      if (confirm(`确定删除${this.todos.item}`)) {
        // 函数调用实现
        // this.delTodo(id);
        // 全局总线实现
        // this.$bus.$emit('delTodo',id)
        // 消息订阅与发布实现
        pubsub.publish("delTodo", id);
      }
    },
    // 编辑
    handleEdit(todos) {
      if (todos.hasOwnProperty("edit")) {
        todos.edit = true;
      } else {
        this.$set(todos, "edit", true);
      }
      // setTimeout(() => {
      //   this.$refs.itemFocus.focus()
      // }, 200);
      this.$nextTick(function () {
        this.$refs.itemFocus.focus()
      });
    },
    // 失去焦点  修改 item 内容
    handleBlur(e, todos) {
      todos.edit = false;
      this.$bus.$emit("updateEdit", todos.id, e.target.value);
    },
    // @key.enter 修改 item 内容
    handleEnter(e, todos) {
      todos.edit = false;
      this.$bus.$emit("updateEdit", todos.id, e.target.value);
    },
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

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
