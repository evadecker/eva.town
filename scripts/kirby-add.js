const path = require('path')
const updateModule = require('./utils/kirby-update-module')
const registerModule = require('./utils/kirby-register-module')

const { paths } = require('../main.config')
const ignore = require('./utils/update-gitignore')
const sh = require('kool-shell/namespaced')('__kirbywebpack')

const args = process.argv.slice(2)
const shouldIgnore = !~args.indexOf('--no-ignore')

function askURL () {
  const REGEX = /^(git@([a-z0-9._~/?#\[\]@!$&'()*+,;=`-]+):|https?:\/\/([a-z0-9._~?#\[\]@!$&'()*+,;=`-]+)\/)([a-z0-9._~:/?#\[\]@!$&'()*+,;=`-]+)\.git$/i //eslint-disable-line
  return sh.input('Git URL:', {
    onSubmit: answer => {
      let url = (answer + '').trim()
      if (url.substr(-1, 1) === '/') url = url.slice(0, -1)
      if (url.substr(-4, 4) !== '.git') url += '.git'

      const result = url.match(REGEX)
      if (!result) {
        sh.error('Invalid repository origin')
        return askURL()
      }
      const host = result[2] || result[3]
      const repoPath = result[4]
      return { host, repoPath, url }
    }
  })
}

function askType () {
  const modulePaths = {
    fields: paths.kirby.fields,
    plugins: paths.kirby.plugins,
    tags: paths.kirby.tags,
    widgets: paths.kirby.widgets
  }

  return sh.input('Category: ' + sh.colors.gray(`(${Object.keys(modulePaths).join('|')})`), {
    onSubmit: answer => {
      if (!(answer in modulePaths)) {
        sh.error('Invalid module type')
        return askType()
      }
      return {value: answer, path: modulePaths[answer]}
    }
  })
}

const kirbyTxt = sh.colors.blue('[Kirby Updater] ')
const spinner = sh.spinner({ title: kirbyTxt + '%s' })

let kirbyModule = {}

Promise.resolve()
  .then(() => askURL())
  .then(({host, repoPath, url}) => {
    kirbyModule.src = url

    let name = repoPath.split('/').pop()
    return sh.input('Module name:' + (name ? sh.colors.gray(` (${name})`) : ''), {
      onSubmit: answer => { kirbyModule.name = answer || name }
    })
  })
  .then(() => askType())
  .then(category => {
    kirbyModule.category = category.value
    kirbyModule.dest = path.join(category.path, kirbyModule.name)
  })
  .then(() => {
    sh.log()
    spinner.resume()
    spinner.log('Updating...')
  })
  .then(() => updateModule(kirbyModule, true))
  .then(() => {
    spinner.log('Registering...')
    return registerModule(kirbyModule, true)
  })
  .then(() => shouldIgnore && ignore(require('./utils/kirby-modules').map(module => module.dest)))
  .then(() => {
    spinner.pause()
    switch (kirbyModule.status) {
      case 'created':
        sh.info(sh.colors.green(' ↪ added ') + kirbyModule.src)
        break
      case 'reset':
        sh.info(sh.colors.yellow(' ↪ recreated ') + kirbyModule.src)
        break
      case 'error':
        sh.info(sh.colors.red(' ↪ error ') + kirbyModule.src)
        break
      case 'unchanged':
        sh.info(sh.colors.gray(' ↪ unchanged ') + kirbyModule.src)
    }
  })
  .then(() => sh.log())
  .catch(err => {
    spinner.pause(true)
    sh.error(err)
  })
