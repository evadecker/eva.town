const fs = require('fs-extra')
const path = require('path')

const ROOT = path.join(__dirname, '..', '..')
const GITIGNORE_PATH = path.join(ROOT, '.gitignore')

const regex = /# <KirbyWebpack>[\s\S]*# <\/KirbyWebpack>/im

module.exports = absolutePaths => {
  return new Promise((resolve, reject) => {
    const paths = absolutePaths.map(p => path.relative(ROOT, p)).join('\n')
    const ignoreStr = '# <KirbyWebpack>\n' + paths + '\n# </KirbyWebpack>'

    fs.ensureFile(GITIGNORE_PATH)
      .then(() => fs.readFile(GITIGNORE_PATH, 'utf-8'))
      .then(output => {
        if (regex.test(output)) output = output.replace(regex, ignoreStr)
        else output += ignoreStr

        fs.writeFile(GITIGNORE_PATH, output)
          .then(() => resolve())
          .catch(err => reject(err))
      })
      .catch(err => reject(err))
  })
}
