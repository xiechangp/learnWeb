const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  //关闭语法检查
  devServer: {
    // 开启代理服务器 （方式一）
    // proxy: 'http://localhost:5000'
    // 开启代理服务器 （方式二）
    proxy: {
      '/stu': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/stu':''},
        ws: true,
        changeOrigin: true
      },
      '/car': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/car':''}
      }
    }
  }
})
