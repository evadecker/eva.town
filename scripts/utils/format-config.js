const path = require('path')
const sh = require('kool-shell/namespaced')('__kirbywebpack')

const PREPROC_LOADER = {
  less: 'less-loader',
  sass: 'sass-loader',
  stylus: 'stylus-loader'
}

const PREPROC_EXT = {
  less: 'less',
  sass: 'scss',
  stylus: 'styl'
}

let cached = null

function formatConfig (config) {
  if (cached) return cached

  const isDev = config.appEnv === 'development'

  // format entries for webpack
  const nEntries = {}
  const projectRoot = path.join(__dirname, '..', '..')
  for (let k in config.entries) {
    const relativeWww = path.relative(projectRoot, config.paths.www)
    const src = path.join(projectRoot, k)
    let dist = path.relative(relativeWww, config.entries[k])
    const ext = path.parse(dist).ext

    // Remove extension from dist name
    // In dev, if it's css, append .css
    if (!isDev || ext !== '.css') dist = dist.substr(0, dist.length - ext.length)

    if (
      dist.length >= 2 &&
      dist.substr(0, 2) === '..' &&
      isDev
    ) {
      sh.log()
      sh.warn(
        '\n' + k + ' will not be bundled in development.\n' +
        'Its destination is outside the public folder.'
      )
      continue
    }

    if (!nEntries[dist]) {
      nEntries[dist] = isDev
        ? [src, 'webpack-hot-middleware/client?reload=true']
        : src
    } else if (Array.isArray(nEntries[dist])) {
      nEntries[dist].unshift(src)
    } else if (typeof nEntries[dist] === 'string') {
      nEntries[dist] = [src, nEntries[dist]]
    }
  }

  config.entries = nEntries

  // add preprocessor loader and ext
  config.css.preprocessorLoader = PREPROC_LOADER[config.css.preprocessor] || null
  config.css.sourceExt = PREPROC_EXT[config.css.preprocessor] || 'css'
  config.css.sourceRegexExt = new RegExp('\\.(' + config.css.sourceExt + ')$')

  cached = config
  return cached
}

module.exports = formatConfig
