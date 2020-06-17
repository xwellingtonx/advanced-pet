module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/advanced-pet/' : '',
    chainWebpack: config => {
      config.module
          .rule('images')
          .use('url-loader')
          .loader('url-loader')
          .tap(options => {
              options.limit = -1
              return options
          })
    }
  }
