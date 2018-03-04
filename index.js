const fs = require('fs')
const {resolve, join} = require('path')
const rimraf = require('rimraf')
const template = require('art-template')

const resolveApp = (...arg) => {
  return resolve.apply(null, ['.'].concat(arg))
}

const config = require(resolveApp('theme/default/config.json'))

new Promise(resolve => {
  try {
    fs.mkdirSync(resolveApp('dist'))
    fs.mkdirSync(resolveApp('dist/article'))
    fs.mkdirSync(resolveApp('dist/css'))
    fs.mkdirSync(resolveApp('dist/js'))
    resolve()
  }
  catch (err) {
    rimraf(resolveApp('dist'), () => {
      console.log('rm all ok')
      fs.mkdirSync(resolveApp('dist'))
      fs.mkdirSync(resolveApp('dist/article'))
      fs.mkdirSync(resolveApp('dist/css'))
      fs.mkdirSync(resolveApp('dist/js'))
      resolve()
    })
  }
}).then(() => {
  const css = fs.readdirSync(resolveApp('theme/default/css'))
  const js = fs.readdirSync(resolveApp('theme/default/js'))

  for (let file of css) {
    fs.writeFileSync(resolveApp('dist/css', file), fs.readFileSync(resolveApp('theme/default/css', file)).toString())
  }

  for (let file of js) {
    fs.writeFileSync(resolveApp('dist/js', file), fs.readFileSync(resolveApp('theme/default/js', file)).toString())
  }


  const md = fs.readdirSync(resolveApp('md'))
  const article = []
  for (let file of md) {
    const title = file.replace('.md', '')
    const content = fs.readFileSync(resolveApp('md', file)).toString()
    const item = {
      title,
      createTime: Date.now(),
      url: `/article/${title}.html`,
      content
    }

    article.push(item)

    fs.writeFileSync(resolveApp('dist/article/', title + '.html'), template(__dirname + '/theme/default/view/info.html', Object.assign(config, {info: item})))
  }
  
  const data = Object.assign(config, {article})
  const index = template(__dirname + '/theme/default/view/index.html', data)
  
  fs.writeFileSync(resolveApp('dist/index.html'), index)
})