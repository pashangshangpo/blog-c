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

  try {
    fs.mkdirSync(cssPath)
  }
  catch (err) {
  }

  try {
    fs.mkdirSync(jsPath)
  }
  catch (err) {
  }

  fs.mkdirSync(articlePath)
}

module.exports = () => {
  return new Promise(resolve => {
    try {
      createFile()
      resolve()
    }
    catch (err) {
      rimraf(articlePath, () => {
        resolve()
      })
    }
  })
}
