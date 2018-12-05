const fs = require('fs-extra')
const path = require('path')

const KIRBYCONFIG_PATH = path.join(__dirname, '..', '..', 'kirby.config.json')
let kirbyConfig = require(KIRBYCONFIG_PATH)

module.exports = (kirbyModule, force = false) => {
  return new Promise((resolve, reject) => {
    if (kirbyModule.status !== 'created' && !force) return resolve()

    kirbyConfig.modules[kirbyModule.category][kirbyModule.name] = kirbyModule.src

    fs.writeJson(KIRBYCONFIG_PATH, kirbyConfig, {spaces: 2})
      .then(() => resolve())
      .catch(err => reject(err))
  })
}
