<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件sum值为：{{sum}}</h3>
    <input type="text" v-model="value" />
    <button @click="addList">添加</button>
    <ul>
        <li v-for="p in personsList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "Persons",
  data() {
      return {
          value:'',
      }
  },
  methods: {
      addList(){     
          this.$store.commit('ADD_PERSON',{id:nanoid(),name:this.value});
          this.value=''
      }
  },
  computed:{
      personsList(){
          return this.$store.state.persons
      },
      sum(){
          return this.$store.state.sum
      }
  }
};
</script>

<style></style>
