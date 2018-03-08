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
  resolveApp
} = require('./path')

const createFile = () => {
  try {
    fs.mkdirSync(distPath)
  }
  catch (err) {
  }

  fs.mkdirSync(articlePath)
  fs.mkdirSync(cssPath)
  fs.mkdirSync(jsPath)
}

module.exports = () => {
  return new Promise(resolve => {
    try {
      createFile()
      resolve()
    }
    catch (err) {
      rimraf(articlePath, () => {
        rimraf(cssPath, () => {
          rimraf(jsPath, () => {
            createFile()
            resolve()
          })
        })
      })
    }
  })
}
