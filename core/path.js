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
  configPath: resolveApp('config.json'),
  mdPath: resolveApp('md')
}

const config = require(pathConfig.configPath)
const curThemeName = config.theme
const curThemePath = join(pathConfig.themePath, curThemeName)
const curThemeViewPath = join(curThemePath, 'view')

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
    curThemeCssPath: join(curThemePath, 'css'),
    curThemeViewPath,
    curThemeInfo: join(curThemeViewPath, 'info.html'),
    curThemeIndex: join(curThemeViewPath, 'index.html')
  }
)