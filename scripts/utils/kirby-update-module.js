const fs = require('fs-extra')
const ghdownload = require('github-download')

module.exports = (module, force) => {
  return new Promise((resolve, reject) => {
    fs.pathExists(module.dest)
      .then(exists => {
        if (exists) module.status = force ? 'reset' : 'unchanged'
      })
      .then(() => module.status === 'reset' ? fs.remove(module.dest) : null)
      .then(() => {
        if (module.status === 'unchanged') return resolve()
        ghdownload(module.src, module.dest)
          .on('end', () => {
            if (!module.status) module.status = 'created'
            resolve()
          })
          .on('error', err => {
            module.status = 'error'
            reject(err)
          })
      })
      .catch(reject)
  })
}
