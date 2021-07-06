const { choices, decisions } = require('../tokens')
const fs = require('fs')
const toKebabCase = require('../utils/kebabCase')

function transformTokens(parentKey, object) {
  const objectKeys = Object.keys(object)

  return objectKeys.reduce((tokensTransformed, objectKey) => {
    const value = object[objectKey]
    if (Array.isArray(value)) {
      const customProperty = parentKey
        ? `${parentKey}-${objectKey}`
        : `${objectKey}`

      return `${tokensTransformed}\n\t--${toKebabCase(
        customProperty
      )} : ${value.join(', ')};`
    } else if (typeof value === 'object') {
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
