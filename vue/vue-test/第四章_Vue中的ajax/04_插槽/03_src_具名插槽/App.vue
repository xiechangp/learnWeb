<template>
  <div class="container">
    <category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJ1q9.jpg" slot="section" />
      <p slot="footer"><a href="https://www.baidu.com">更多美食</a></p>
    </category>
    <category title="游戏">
      <ul slot="section">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div slot="footer" class="footer">
        <a href="#">英雄联盟</a>
        <a href="#">火上浇油</a>
      </div>
    </category>
    <category title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        slot="section"
      ></video>
      <template v-slot:footer>
        <div class="footer">
          <a href="#">动画</a>
          <a href="#">体育</a>
          <a href="#">少儿</a>
        </div>
        <h2>欢迎光临</h2>
      </template>
    </category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好,李焕英》", "《尚硅谷》"],
    };
  },
};
</script>
<style scoped>
.container,
.footer {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}

</style>
