/**
 * 入口文件
 */
const fs = require('fs')
const template = require('art-template')
const init = require('./core/init')

// const config = require(resolveApp('theme/default/config.json'))

init().then(() => {
})

// new Promise(resolve => {
  
// }).then(() => {
//   const css = fs.readdirSync(resolveApp('theme/default/css'))
//   const js = fs.readdirSync(resolveApp('theme/default/js'))

//   for (let file of css) {
//     fs.writeFileSync(resolveApp('dist/css', file), fs.readFileSync(resolveApp('theme/default/css', file)).toString())
//   }

//   for (let file of js) {
//     fs.writeFileSync(resolveApp('dist/js', file), fs.readFileSync(resolveApp('theme/default/js', file)).toString())
//   }


//   const md = fs.readdirSync(resolveApp('md'))
//   const article = []
//   for (let file of md) {
//     const title = file.replace('.md', '')
//     const content = fs.readFileSync(resolveApp('md', file)).toString()
//     const item = {
//       title,
//       createTime: Date.now(),
//       url: `/article/${title}.html`,
//       content
//     }

//     article.push(item)

//     fs.writeFileSync(resolveApp('dist/article/', title + '.html'), template(__dirname + '/theme/default/view/info.html', Object.assign(config, {info: item})))
//   }
  
//   const data = Object.assign(config, {article})
//   const index = template(__dirname + '/theme/default/view/index.html', data)
  
//   fs.writeFileSync(resolveApp('dist/index.html'), index)
// })