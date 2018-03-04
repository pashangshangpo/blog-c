/**
 * 静态文件服务
 */
const http = require('http')
const fs = require('fs')
const {distPath, join} = require('./path')

http.createServer((req, res) => {
  const path = join(distPath, req.url)
  let content = ''

  try {
    content = fs.readFileSync(path).toString()
  }
  catch (err) {
  }

  res.end(content)
}).listen('8089')