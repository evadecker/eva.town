const fs = require('fs-extra')
const path = require('path')

const kirbyModules = require('./utils/kirby-modules')
const updateModule = require('./utils/kirby-update-module')

const { paths } = require('../main.config')
const ignore = require('./utils/update-gitignore')
const sh = require('kool-shell/namespaced')('__kirbywebpack')

// @TODO: proper arguments handling with minimist
const force = (process.argv[2] === '-f' || process.argv[2] === '--force')
const kirbyTxt = sh.colors.blue('[Kirby Updater] ')

function updateModules () {
  return Promise.all(kirbyModules.map(module => updateModule(module, force)))
}

const areUpdated = modules => (modules.filter(module => module.status !== 'unchanged').length > 0)
const spinner = sh.spinner({ title: kirbyTxt + '%s' })

Promise.resolve()
  .then(() => {
    spinner.resume()
    spinner.log('Updating...')
  })
  .then(() => updateModules())
  .then(() => ignore(kirbyModules.map(module => module.dest)))
  .then(() => {
    spinner.pause(true)
    if (areUpdated(kirbyModules)) {
      sh.info('🕛  ' + kirbyTxt + 'Update complete.')
      return fs.emptyDir(paths.kirby.cache)
    } else sh.info('🕛  ' + kirbyTxt + 'Nothing to update.')
  })
  .then(() => fs.ensureFile(path.join(paths.kirby.cache, '.gitkeep')))
  .then(() => kirbyModules.forEach(module => {
    switch (module.status) {
      case 'created':
        sh.info(sh.colors.green(' ↪ added ') + module.src)
        break
      case 'reset':
        sh.info(sh.colors.yellow(' ↪ recreated ') + module.src)
        break
      case 'error':
        sh.info(sh.colors.red(' ↪ error ') + module.src)
        break
      case 'unchanged':
        sh.info(sh.colors.gray(' ↪ unchanged ') + module.src)
    }
  }))
  .then(() => sh.log())
  .catch(err => {
    spinner.pause(true)
    sh.error(err)
  })
