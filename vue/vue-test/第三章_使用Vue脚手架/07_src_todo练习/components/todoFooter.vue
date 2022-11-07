<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input id="checkAll" type="checkbox" :checked="allTotal" @click="allBright" /> -->
      <input id="checkAll" type="checkbox" v-model="allTotal" />
    </label>
    <span>
      已完成<span id="allCompletedTodos">{{ doneTotal }}</span> / 全部<span
        id="allTodos"
        >{{ total }}</span
      >
    </span>
    <button id="removeAllCompleted" class="btn btn-danger" @click="clearTodo">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "todoFooter",
  props: ["todos", "allCheaked", "clearCheaked"],
  computed: {
    doneTotal() {
      return this.todos.reduce(
        (per, current) => per + (current.done ? 1 : 0),
        0
      );
    },
    total() {
      return this.todos.length;
    },
    allTotal: {
      get() {
        return this.total === this.doneTotal;
      },
      set(value) {
        this.allCheaked(value);
      },
    },
  },
  mounted() {
    console.log(this.allTotal);
  },
  updated() {
    console.log(this.allTotal);
  },
  methods: {
    // allBright(e){
    //   this.allCheaked(e.target.checked)
    // },
    clearTodo() {
      if (confirm(`确定清除已完成的选项吗`)) {
        this.clearCheaked();
      }
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
