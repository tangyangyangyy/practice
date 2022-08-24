// products\webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
  // 导入模块联邦插件
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 9020,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // 将应用自身作为模块暴露出去
    new ModuleFederationPlugin({
      // 构建输出的模块文件名称
      // 其它应用引入当前模块时需要加载的文件名称
      filename: 'remoteEntry.js',

      // 模块名称，相当于 single-spa 的组织名称
      // 被远程引用时路径为 `<name>/<expose>`
      // 模块名称具有唯一性，不同的模块不能具有相同的名称，如果名称相同，可以在 `remotes` 配置引入的时候设置模块别名
      name: 'app2',

      // 被远程引用时可暴露的资源路径及其别名
      // key 是模块名称
      // value 是具体的模块路径(`.js` 扩展名可以省略)
      exposes: {
        // 被远程引用时的路径为 `<name>/index`
        // 注意：模块名称前要添加 `./` 才会生效
        './index': './src/index'
      }
    })
  ]
}