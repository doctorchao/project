// webpack 是基于node.js 的所以这个配置文件要用require引入模块
// 当webpack跑起来后便可以使用es6语法了 因为其内部支持
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './main.js',
  devtool:"cheap-module-eval-source-map",
  resolve:{
    extensions:[".vue",".js",".css"],
    // 作用:自动补全后缀名
    alias:{
      // 快捷方式  类似赋值
      // vue:"vue/dist/vue.esm.js",
      "@":path.resolve(__dirname,"./src") // 可代替src目录下路径 ../ 
    }
  },
  output: {
    filename: 'bundle2.js',
    // 当filename改名时 dist 下会生成一个新的js打包文件
    // 使用plugin插件后 这里filename改名 html文件内引入语句会自动更改
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
        {
          // 图片加载
          test: /\.(jpg|svg|png|gif|jpeg)$/,
          use: [
            'file-loader',
            //'url-loader',   二者用其一
            
          ]
        },
        {
          // css加载
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          // vue加载
          test: /\.vue$/,
          loader: 'vue-loader'
        }
    ]
  },
  plugins: [
    // dist下打包文件管理 plugin
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname,"./index.html")
    }),
    new CleanWebpackPlugin(),
    // Vue loader 插件
    new VueLoaderPlugin(),

  ],
  devServer:{  // 热更新 实时更新工具
    contentBase: path.resolve(__dirname,"./dist")
  },
};


// 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。
// 我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。
// 这对于需要拆分成多个文件的复杂配置是非常有用。
// 执行命令可直接输入 npx webpack 执行
// 而不用输入 webpack-cli --config ./webpack.config.js 或修改package.json 里面scripts