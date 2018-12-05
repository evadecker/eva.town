const { modules } = require('../kirby.config.json')

const sh = require('kool-shell/namespaced')('__kirbywebpack')

function buildBranch (index, length, parent = '') {
  return parent.replace(/├/g, '│').replace(/[─└]/g, ' ') +
  (index < length - 1
    ? '├── '
    : '└── ')
}

sh.log(sh.colors.red('Kirby'))

for (let i = 0, categories = Object.keys(modules); i < categories.length; i++) {
  let category = categories[i]

  let branch = buildBranch(i, categories.length)
  sh.log(branch + sh.colors.yellow(`${category}`))

  if (typeof modules[category] === 'object' && modules[category]) {
    for (let j = 0, names = Object.keys(modules[category]); j < names.length; j++) {
      let name = names[j]

      sh.log(buildBranch(j, names.length, branch) + name + sh.colors.gray(` ${modules[category][name]}`))
    }
  }
}

sh.log()
