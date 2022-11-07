<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件sum值为：{{sum}}</h3>
     <h3>列表中第一个人：{{listFirst}}</h3>
    <input type="text" v-model="value" />
    <button @click="addList">添加</button>
    <button @click="addNameServer">从服务器上添加</button>
    <button @click="addWang">添加姓王人员</button>
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
          this.$store.commit('personsOptions/ADD_PERSON',{id:nanoid(),name:this.value});
          this.value=''
      },
      addWang(){
          this.$store.dispatch('personsOptions/addWang', {id:nanoid(),name:this.value});
          this.value=''
      },
      addNameServer(){
          this.$store.dispatch('personsOptions/addNameServer')
      }
  },
  computed:{
      personsList(){
          return this.$store.state.personsOptions.persons
      },
      sum(){
          return this.$store.state.countOptions.sum
      },
      listFirst(){
        //   console.log(this.$store);
          return this.$store.getters['personsOptions/listFirst']
      }
  },
  mounted() {
    //   console.log(this);
  },
};
</script>

<style></style>
