/* eslint-disable no-undef */
// eslint-disable-next-line no-undef

const fs = require('fs').promises

const ATOMIC_DESIGN_TYPES = {
  atom: 'atoms',
  molecule: 'molecules',
}

function checkParams(type, component) {
  if (!type || !component) {
    console.log('Error: Please make sure you pass a tpye an a component name')
    process.exit(1)
  }
}

function checkParamsType(mappedType) {
  if (!mappedType) {
    console.error(
      `Error the param type "${mappedType}" is not valid. Usse atom or molecule`
    )
    process.exit(1)
  }
}

function readComponentFile() {
  return fs.readFile('./templates/component/component.js', 'utf8')
}

function replaceComponentFile(componentFile, componentName) {
  return componentFile.replace(/Component/g, componentName)
}

function createComponentFolder(componentPath) {
  return fs.mkdir(componentPath, { recursive: true })
}

function createComponentFile(
  componentPath,
  componentName,
  replaceComponentFile
) {
  return fs.writeFile(
    `${componentPath}/${componentName}.js`,
    replaceComponentFile,
    'utf8'
  )
}

function createComponent(type, componentName) {
  const mappedType = ATOMIC_DESIGN_TYPES[type]
  const componentPath = `./${mappedType}/${componentName}`

  checkParams(type, componentName)
  checkParamsType(mappedType)

  readComponentFile()
    .then((componentFile) => replaceComponentFile(componentFile, componentName))
    .then((replaceComponentFile) => {
      createComponentFolder(componentPath).then(() => {
        createComponentFile(componentPath, componentName, replaceComponentFile)
      })
    })
    .catch((error) => {
      console.log(error)
      process.exit(1)
    })
}

const [, , type, componentName] = process.argv
createComponent(type, componentName)
