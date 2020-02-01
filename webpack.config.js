var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var pathsToClean = ['dist']
var packageJson = require("./package.json")
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var envs = require("./src/utils/env")

const vendor = Object
  .keys(packageJson.dependencies)
  .filter(item => item !== 'babel-polyfill')

module.exports = {
  entry: {
    "main": ["babel-polyfill", "./src/main.js"], // babel-polyfill 必须先引入
    vendor
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: ['css-loader']
        })
      },

      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: ['css-loader', 'less-loader']
        })
      },

      // {
      //   test: /\.sass$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'vue-style-loader',
      //     use: ['css-loader', 'sass-loader']
      //   })
      // },

      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'vue-style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|webp|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader'
      }
    ]
  },
  externals: {

  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean),
    new ExtractTextPlugin('main.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'runtime'],
      filename: '[name].js'
    }),
    new HtmlWebpackPlugin({
      chunks: ['main', 'runtime', 'vendor'],
      inject: 'body',
      hash: true,
      title: '趣法拍',
      filename: 'index.html',
      template: 'index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([{
      from: 'static',
      to: 'static'
    }])
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  devServer: {
    host: envs.WEBPACK_DEV_SERVER_HOST,
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    // openPage: envs.WEBPACK_OPEN_PAGE,

    port: envs.WEBPACK_DEV_SERVER_PORT,
    proxy: {
      // "/wuliu": {
      //   target: "http://rdtest2.gvt861.com/lms",
      //   pathRewrite: {
      //     "^/wuliu": ""
      //   }
      // },
      [`${envs.BACKEND_DOMAIN}`]: {
        target: envs.WEBPACK_DEV_SERVER_PROXY_TARGET,
        pathRewrite: {
          [`^${envs.BACKEND_DOMAIN}`]: "/"
        }
      },

    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV !== 'development') {
  module.exports.devtool = false;
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + process.env.NODE_ENV + '"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
  // 可视化环境存在
  if (process.env.ANALYZER) {
    module.exports.plugins = module.exports.plugins.concat(new BundleAnalyzerPlugin())
  }
} else {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + process.env.NODE_ENV + '"'
      }
    })
  ])
}
