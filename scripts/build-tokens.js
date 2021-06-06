const { choices, decisions } = require('../tokens')
const fs = require('fs')

const toKebabCase = (string) =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

function transformTokens(parentKey, object) {
  const objectKeys = Object.keys(object)

  return objectKeys.reduce((tokensTransformed, objectKey) => {
    const value = object[objectKey]
    if (typeof value === 'object') {
      const customProperty = parentKey
        ? `${parentKey}-${objectKey}`
        : `${objectKey}`
      return `${tokensTransformed}
            ${transformTokens(`${toKebabCase(customProperty)}`, value)}`
    }

    const customProperty = parentKey
      ? `--${parentKey}-${toKebabCase(objectKey)}`
      : `${parentKey}-${objectKey}`
    return `${tokensTransformed}
        ${customProperty}: ${value};`
  }, '')
}

function buildTokens() {
  const choicesStr = transformTokens(null, choices)
  const decisionStr = transformTokens(null, decisions)

  const customProperties = `${choicesStr}
        ${decisionStr}`
  const data = [':root {', customProperties.trim(), '}'].join('\n')

  fs.writeFile('./styles/tokens.css', data, 'utf8', function (err) {
    if (err) {
      console.log(err)
    }
  })
}

buildTokens()
