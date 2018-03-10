/**
 * 初始化
 */
const fs = require('fs')
const rimraf = require('rimraf')
const {
  distPath,
  articlePath,
  cssPath,
  jsPath,
  imgPath,
  resolveApp
} = require('./path')

const fsExistsSync = path => {
  try {
    fs.accessSync(path, fs.F_OK)
  }
  catch (e) {
    return false
  }

  return true
}

const createFile = path => {
  if (!Array.isArray(path)) {
    path = [path]
  }

  path.forEach(item => {
    if (!fsExistsSync(item)) {
      fs.mkdirSync(item)
    }
  })
}

module.exports = () => {
  return new Promise(async resolve => {
    createFile([distPath, cssPath, jsPath, imgPath])

    if (fsExistsSync(articlePath)) {
      await new Promise(resolve => {
        rimraf(articlePath, (err, out) => {
          resolve()
        })
      })
    }

    createFile(articlePath)
    resolve()
  })
}
