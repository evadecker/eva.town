const path = require('path')
const { paths } = require('../../main.config.js')
const kirbyConfig = require('../../kirby.config.json')

module.exports = (kirbyModules => {
  let modules = []
  for (let moduleType in kirbyModules) {
    if (typeof kirbyModules[moduleType] === 'object' && kirbyModules[moduleType]) {
      for (let moduleName in kirbyModules[moduleType]) {
        modules.push({
          category: moduleType,
          name: moduleName,
          src: kirbyModules[moduleType][moduleName],
          dest: path.join(paths.kirby[moduleType], moduleName)
        })
      }
    } else {
      modules.push({
        category: moduleType,
        src: kirbyModules[moduleType],
        dest: paths.kirby[moduleType]
      })
    }
  }
  return modules
})(kirbyConfig.modules)
