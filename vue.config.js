module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/main.scss";'
      }
    }
  }
}
