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

  try {
    fs.mkdirSync(articlePath)
  }
  catch (err) {
  }
}

module.exports = () => {
  return new Promise(resolve => {
    createFile()
    resolve()
  })
}
