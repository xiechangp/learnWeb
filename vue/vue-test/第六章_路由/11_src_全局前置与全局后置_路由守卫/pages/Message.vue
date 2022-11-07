<template>
  <div>
    <ul>
      <li v-for="d in detailList" :key="d.id">
          <!-- 字符串传参方式 query -->
        <!-- <router-link :to="`/home/message/detail?id=${d.id}&title=${d.title}`" >
        {{d.title}}
        </router-link>&nbsp;&nbsp; -->

        <!-- 字符串传参方式 params -->
        <!-- <router-link :to="`/home/message/detail/${d.id}/${d.title}`" >
        {{d.title}}
        </router-link>&nbsp;&nbsp; -->

        <!-- 对象传参方式 query -->
        <!-- path:'/home/message/detail' -->
        <router-link 
        :to="{
            name:'detail'
            ,
            query:{
                id:d.id,
                title:d.title
            }
            }"  >
        {{d.title}}
        </router-link>&nbsp;&nbsp;

        <!-- 对象传参方式 params 只能用name 不能用path -->
        <!-- <router-link 
        :to="{
            name:'detail'
            ,
            params:{
                id:d.id,
                title:d.title
            }
            }"  >
        {{d.title}}
        </router-link>&nbsp;&nbsp; -->
      <button @click="pushShow(d)">push</button>
      <button @click="replaceShow(d)">replace</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      detailList: [
        {
          id: "001",
          title: "可乐",
        },
        {
          id: "002",
          title: "雪碧",
        },
        {
          id: "003",
          title: "芬达",
        },
      ],
    };
  },

  methods: {
    pushShow(d){
      this.$router.push({
        name:'detail',
        query:{
          id:d.id,
          title:d.title
        }
      })
    },
    replaceShow(d){
    this.$router.replace({
        name:'detail',
        query:{
          id:d.id,
          title:d.title
        }
      })
    }
  },
    beforeDestroy(){
   console.log('Messgage即将被销毁');
  },
};
</script>
