const fs = require('fs-extra')
const path = require('path')

const KIRBYCONFIG_PATH = path.join(__dirname, '..', '..', 'kirby.config.json')
let kirbyConfig = require(KIRBYCONFIG_PATH)

module.exports = ({category, name}) => {
  return new Promise((resolve, reject) => {
    if (category && name) delete kirbyConfig.modules[category][name]

    fs.writeJson(KIRBYCONFIG_PATH, kirbyConfig, {spaces: 2})
      .then(() => resolve())
      .catch(err => reject(err))
  })
}
