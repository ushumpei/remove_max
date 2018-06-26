import _ from 'lodash'
import fs from 'fs'

const readJSON = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) return reject(err)
      resolve(JSON.parse(data))
    })
  })
}

// 結果がソートされる方法
const removeMaxForEachPrefix = (json) => {
  return _(json)
    .sort()
    .groupBy(i => i.split('-')[0])
    .map(v => _.initial(v))
    .flattenDeep()
    .value()
}

// 並び順を変えない方法
const removeMaxForEachPrefixKeepAlign = (json) => {
  const winners = _(json).groupBy(i => i.split('-')[0]).map(v => _.max(v)).value()
  const losers = _(json).difference(winners).value()
  return losers
}

const main = () => {
  readJSON('input.json').then(removeMaxForEachPrefix).then(console.log)
  readJSON('input.json').then(removeMaxForEachPrefixKeepAlign).then(console.log)
}
main()
