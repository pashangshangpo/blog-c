/**
 * 生成文件
 */
const fs = require('fs')
const template = require('art-template')
const {
  curThemeCssPath,
  curThemeJsPath,
  cssPath,
  jsPath,
  mdPath,
  curThemeInfo,
  curThemeIndex,
  curThemeConfigPath,
  articlePath,
  distPath,
  join
} = require('./path')
const parseMd = require('./parseMd')

const curThemeConfig = require(curThemeConfigPath)

const outCssJs = () => {
  const cssDir = fs.readdirSync(curThemeCssPath)
  const jsDir = fs.readdirSync(curThemeJsPath)

  for (let fileName of cssDir) {
    fs.writeFileSync(join(cssPath, fileName), fs.readFileSync(join(curThemeCssPath, fileName)).toString())
  }

  for (let fileName of jsDir) {
    fs.writeFileSync(join(jsPath, fileName), fs.readFileSync(join(curThemeJsPath, fileName)).toString())
  }
}

const outHtml = () => {
  const mdDir = fs.readdirSync(mdPath)
  const article = []

  for (let fileName of mdDir) {
    const title = fileName.replace('.md', '')
    const {config, content} = parseMd(fs.readFileSync(join(mdPath, fileName)).toString())

    const item = {
      title,
      createTime: config.createTime,
      url: `/article/${title}.html`,
      content
    }

    article.push(item)
    fs.writeFileSync(
      join(articlePath, title + '.html'),
      template(
        curThemeInfo, 
        Object.assign(curThemeConfig, { info: item })
      )
    )
  }

  fs.writeFileSync(
    join(distPath, 'index.html'),
    template(
      curThemeIndex,
      Object.assign(curThemeConfig, { article })
    )
  )
}

outCssJs()
outHtml()