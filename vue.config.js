const webpack = require('webpack')
const config = require('config')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        APP_CONFIG: JSON.stringify(config.get('APP_CONFIG'))
      })
    ]
  },

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'My Vue App'
        return args
      })
  },

  transpileDependencies: [
    'vuetify'
  ]
}
