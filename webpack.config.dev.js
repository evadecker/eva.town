const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.config.common')
const user = require('./scripts/utils/format-config')(require('./main.config.js'))

const cssLoaders = (
  [
    {
      loader: 'style-loader',
      options: {
        sourceMap: true,
        singleton: true // avoid CSS Flashing
      }
    }
  ].concat(common.CSSLoaders)
)

// append resolve-url-loader before the preprocessor loader so that
// we can avoid broken relative url with the dev server
if (user.css.preprocessorLoader) {
  for (let i = 0; i < cssLoaders.length; i++) {
    const obj = cssLoaders[i]
    if (obj.loader !== user.css.preprocessorLoader) continue
    cssLoaders.splice(i, 0,
      {
        loader: 'resolve-url-loader',
        options: { sourceMap: true }
      }
    )
    break
  }
}

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: user.css.sourceRegexExt,
        use: cssLoaders
      },
      {
        test: /\.(svg|png|jpg|gif|ttf|otf|woff|woff2|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(common.webpack, devConfig)
