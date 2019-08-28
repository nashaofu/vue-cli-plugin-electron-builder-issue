module.exports = {
  publicPath: '.',
  pluginOptions: {
    electronBuilder: {
      chainWebpackMainProcess: config => {
        config.externals({ 'shortcut-capture': "require('shortcut-capture')" })
      }
    }
  }
}
