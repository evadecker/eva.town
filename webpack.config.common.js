const user = require('./scripts/utils/format-config')(require('./main.config.js'))
const { EnvironmentPlugin } = require('webpack')

const CSSLoaders = [
  {
    loader: 'css-loader',
    options: {
      url: !!(user.appEnv === 'development'),
      sourceMap: true
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }
]

if (user.css.preprocessorLoader) {
  CSSLoaders.push(
    {
      loader: user.css.preprocessorLoader,
      options: {
        sourceMap: true
      }
    }
  )
}

const webpack = {
  entry: user.entries,
  output: {
    publicPath: user.paths.basepath,
    // we bundle from the www folder to avoid messing with the webpack dev middleware
    // all entries src/dest path are converted through scripts/utils/format-config.js
    path: user.paths.www,
    filename: '[name].js',
    chunkFilename: '[name].[id].chunk.js'
  },
  resolve: {
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: [
    new EnvironmentPlugin(['NODE_ENV'])
  ]
}

module.exports = { CSSLoaders, webpack, user }
