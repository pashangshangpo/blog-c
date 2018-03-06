/**
 * 
 * markdown解析
 */
const marked = require('marked')
const renderer = new marked.Renderer()

// 从新页面打开
renderer.link = (href, title, text) => {
  return `<a href="${href}" title="${title || ''}" target="_blank">${text}</a>`
}

// 双击全屏打开图片
renderer.image = (href, title, text) => {
  return `<img src="${href}" title="${title || ''}" alt="${text || ''}" ondblclick="window.open('${href}');">`
}

marked.setOptions({
  renderer: renderer
})

module.exports = content => {
  const configReg = /-{3}\n+([\s\S]+?\n+)-{3}([\s\S]+)/img
  const configRes = configReg.exec(content)

  const config = configRes[1].trim().split('\n')

  const res = {
    config: {},
    content: marked(configRes[2].trim())
  }
  
  // 解析配置信息
  for (let section of config) {
    const arr = section.split(':')
    const name = arr[0]
    const val = arr.slice(1, -1).join(':').trim()

    res.config[name] = val
  }

  return res
}