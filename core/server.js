/**
 * 静态文件服务
 */
const http = require('http')
const fs = require('fs')
const {distPath, join} = require('./path')

http.createServer((req, res) => {
  const path = join(distPath, decodeURI(req.url === '/' ? '/index.html' : req.url))
  let content = ''

  try {
    content = path.indexOf('.png') > -1 ? fs.readFileSync(path) : fs.readFileSync(path).toString()
  }
  catch (err) {
  }

  res.end(content)
}).listen('8089')