const config = require('../main.config.js')
const pjson = require('../package.json')

const devDeps = Object.keys(pjson.devDependencies || {})

const sh = require('kool-shell/namespaced')('__kirbywebpack')

const CORES = {
  less: 'less',
  sass: 'node-sass',
  stylus: 'stylus'
}

const LOADERS = {
  less: 'less-loader',
  sass: 'sass-loader',
  stylus: 'stylus-loader'
}

const spinner = sh.spinner({ title: '%s' })

function checkPreprocessor () {
  const preproc = config.css.preprocessor
  if (!CORES[preproc]) return

  const neededPackages = []
  const uselessPackages = []

  for (let k in CORES) {
    const core = CORES[k]
    const loader = LOADERS[k]
    if (k !== preproc) {
      if (~devDeps.indexOf(core)) uselessPackages.push(core)
      if (~devDeps.indexOf(loader)) uselessPackages.push(loader)
    } else {
      if (!~devDeps.indexOf(core)) neededPackages.push(core)
      if (!~devDeps.indexOf(loader)) neededPackages.push(loader)
    }
  }

  let needsUpdate = false

  Promise.resolve()
    .then(() => {
      if (uselessPackages.length > 0 || neededPackages.length > 0) {
        needsUpdate = true
        sh.log()
        sh.warn('Dependencies are not sync with your CSS preprocessor, ' + sh.colors.yellow(preproc) + '\n')
        spinner.resume()
        spinner.log('Updating devDependencies...')
      }
    })
    .then(() => uselessPackages.length <= 0 ? ''
      : sh.silentExec('npm', ['r', '-D'].concat(uselessPackages))).catch(() => {})
    .then(() => neededPackages.length <= 0 ? ''
      : sh.silentExec('npm', ['i', '-D'].concat(neededPackages))).catch(() => {})
    .then(() => {
      spinner.pause(true)
      if (!needsUpdate) return
      sh.success('devDependencies updated!')
    })
}

checkPreprocessor()
