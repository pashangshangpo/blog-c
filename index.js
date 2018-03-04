/**
 * 入口文件
 */
const fs = require('fs')
const init = require('./core/init')

init().then(() => {
  require('./core/write')
  require('./core/server')
})