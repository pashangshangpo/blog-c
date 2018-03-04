/**
 * 路径配置
 */
const {resolve, join} = require('path')

const resolveApp = (...arg) => {
  return resolve.apply(null, ['.'].concat(arg))
}

const pathConfig = {
  distPath: resolveApp('dist'),
  themePath: resolveApp('theme'),
  articlePath: resolveApp('dist/article'),
  cssPath: resolveApp('dist/css'),
  jsPath: resolveApp('dist/js'),
  configPath: resolveApp('config.json')
}

const config = require(pathConfig.configPath)
const curThemeName = config.theme
const curThemePath = join(pathConfig.themePath, curThemeName)

module.exports = Object.assign(
  {
    resolveApp,
    join
  },
  pathConfig,
  {
    curThemeName,
    curThemePath,
    curThemeConfigPath: join(curThemePath, 'config.json'),
    curThemeJsPath: join(curThemePath, 'js'),
    curThemeCssPath: join(curThemePath, 'css')
  }
)