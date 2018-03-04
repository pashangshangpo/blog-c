/**
 * 路径配置
 */
const {resolve, join} = require('path')

const resolveApp = (...arg) => {
  return resolve.apply(null, ['.'].concat(arg))
}

const config = {
  distPath: resolveApp('dist'),
  themePath: resolveApp('theme'),
  articlePath: resolveApp('dist/article'),
  cssPath: resolveApp('dist/css'),
  jsPath: resolveApp('dist/js')
}

module.exports = Object.assign(
  {
    resolveApp,
    join
  },
  config
)