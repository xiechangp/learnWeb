<template>
  <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
        <h2>Vue Router Demo</h2>
        <button @click="back">εθΏ</button>
        <button @click="forward">ει</button>
        <button @click="test">go</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name:'Banner',
        methods: {
          back(){
            this.$router.back()
          },
          forward(){
            this.$router.forward()
          },
          test(){
            this.$router.go(-2)
          }
        },
    }
</script>

<style>

</style>