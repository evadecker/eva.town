const startTime = new Date()

const fs = require('fs-extra')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config.prod')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const user = require('./utils/format-config')(require('../main.config.js'))

const sh = require('kool-shell/namespaced')('__kirbywebpack')

const compiler = webpack(webpackConfig)

new ProgressBarPlugin({
  format: sh.colors.gray('build [:bar] :percent'),
  clear: true,
  summary: false
}).apply(compiler)

Promise.resolve()
  .then(() => fs.remove(path.join(user.paths.kirby.assets, 'builds')))
  .then(() => sh.log('Running the webpack compiler...'))
  .then(
    () =>
      new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
          stats.compilation.modules.forEach(module => {
            if (module.error) return reject(module.error)
          })
          if (!err) resolve(stats)
          else reject(err)
        })
      })
  )
  .catch(err => {
    webpackError(err)
  })
  .then(() => {
    const elapsedTime = ((new Date() - startTime) / 1000).toFixed(3)
    sh.log()
    sh.success(`Build completed in ${elapsedTime}s !\n`)
    sh.exit(0)
  })

function webpackError (err) {
  sh.error('Error during the webpack compilation')
  sh.error(err)
  sh.exit(0)
}
