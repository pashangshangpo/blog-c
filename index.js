/**
 * 入口文件
 */
const fs = require('fs')
const init = require('./core/init')

init().then(() => {
  require('./core/write')
  
  if (process.argv[2] === 'start') {
    require('./core/server')
  }
})
