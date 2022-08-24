// container\webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
  // 导入模块联邦插件
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 9010
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'app1',

      // 远程引用的应用及其别名的映射
      remotes: {
        // key 是模块的别名，作为当前应用中引入该模块时的 name
        // value 是模块具体地址，有两部分组成：`<name>@<url>`
        //   name 是模块自己配置的名称
        //   url 是模块构建的文件地址
        app2: 'app2@http://localhost:9020/remoteEntry.js'
      }
    })
  ]
}