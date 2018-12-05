const fs = require('fs-extra')

const ignore = require('./utils/update-gitignore')
const unregister = require('./utils/kirby-unregister-module')

const sh = require('kool-shell/namespaced')('__kirbywebpack')

const kirbyModules = require('./utils/kirby-modules').map(module => Object.assign({}, module, {
  value: module.category + '/' + module.name
}))

const removableModules = kirbyModules.filter(module => 'name' in module)

if (kirbyModules.length === 0) {
  sh.error('No modules')
  sh.exit(0)
}

// @TODO: prompt name instead of sh.select
sh.select('Which module to remove ?', removableModules)
  .then(modules => Promise.all(modules.map(module => new Promise((resolve, reject) => {
    fs.remove(module.dest)
      .then(() => {
        sh.info(sh.colors.red(' ↪ removed ') + module.name)
        return unregister(module)
      })
      .then(() => resolve())
      .catch(err => reject(err))
  }))))
  .then(() => ignore(kirbyModules.filter(module => !module.selected).map(module => module.dest)))
  .then(() => sh.log())
  .catch(err => sh.error(err))
