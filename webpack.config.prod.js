const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

const common = require('./webpack.config.common')
const user = require('./scripts/utils/format-config')(require('./main.config.js'))

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: user.css.sourceRegexExt,
        use: [MiniCssExtractPlugin.loader].concat(common.CSSLoaders)
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyPlugin({
        sourceMap: true,
        parallel: true,
        uglifyOptions: {
          mangle: true,
          keep_classnames: true,
          keep_fnames: false,
          compress: { inline: false, drop_console: true },
          output: { comments: false }
        }
      })
    ],
    // Extract all css into one file
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          // chunks: 'all',
          enforce: true
        }
      }
    }
  }
}

module.exports = merge(common.webpack, prodConfig)
