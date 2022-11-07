<template>
  <ul>
    <li :style="{opacity}">云村有票</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
    export default {
        name:'News',
        data() {
          return {
            opacity: 1
          }
        },
        // mounted() {
        //   this.timer = setInterval(() => {
        //         this.opacity -= 0.02
        //         if(this.opacity <= 0){
        //             this.opacity = 1
        //         }
        //     }, 16);
        // },
          beforeDestroy(){
            console.log('news即将被销毁');
          },
        // 激活
        activated() {
          this.timer = setInterval(() => {
            console.log(11);
                this.opacity -= 0.02
                if(this.opacity <= 0){
                    this.opacity = 1
                }
            }, 16);
        },
        // 失效 失活
        deactivated() {
          clearInterval(this.timer)
        },
    };
</script>

