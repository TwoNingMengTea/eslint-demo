module.exports = {
  // 选项...
  chainWebpack: (config) => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap((options) => {
        options.fix = false
        options.cache = false
        return options
      }).end()
  }
}
