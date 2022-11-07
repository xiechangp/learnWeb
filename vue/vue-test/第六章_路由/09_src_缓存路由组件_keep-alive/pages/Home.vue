<template>
  <div>
    <h2>我是Home的内容</h2>
  <ul class="nav nav-tabs">
    <li>
      <router-link class="list-group-item" active-class="active" to="/home/news">Home</router-link>
    </li>
    <li>
      <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
    </li>
  </ul>
  <!-- <keep-alive :include="['News','Message']"> 多个组件名 -->
  <keep-alive include="News"> <!-- 组件名 -->
    <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script>
export default {
    name:'Home'
}
</script>
