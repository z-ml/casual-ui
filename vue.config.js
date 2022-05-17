module.exports = {
  devServer: {
    port: 9001,
  },
  // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/css/handle.scss";`
        }
      }
  }
}