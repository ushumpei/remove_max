import fs from 'fs'

const readJSON = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) return reject(err)
      resolve(JSON.parse(data))
    })
  })
}

const aggregateToDictionary = (input) => {
  return input.map(i => i.split('-'))
    .reduce((dic, kv) => {
      if (!dic[kv[0]]) dic[kv[0]] = []
      dic[kv[0]].push(kv[1])
      return dic
    }, {})
}

const flattenOnlyLosers = (dictionary) => {
  return Object.keys(dictionary)
    .map(k => {
      const a = dictionary[k].sort().slice(0, -1)
      return a.map(v => k + '-' + v)
    }).reduce((p, n) => {
      return p.concat(n)
    })
}

const main = async () => {
  const input = await readJSON('input.json')
  const dictionary = aggregateToDictionary(input)
  const losers = flattenOnlyLosers(dictionary)
  console.log(losers)
}

main()
