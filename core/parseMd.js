/**
 * 
 * markdown解析
 */
module.exports = content => {
  const configReg = /-{3}\n+([\s\S]+?\n+)-{3}([^\B]+)/img
  const configRes = configReg.exec(content)

  const config = configRes[1].trim().split('\n')
  const res = {
    config: {},
    content: configRes[2].trim()
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