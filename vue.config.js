module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/main.scss";'
      }
    }
  }
}
