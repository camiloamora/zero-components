const ICONS_ASSETS_PATH = '/icons/'

const iconMap = {
  'arrow-right': 'arrow-right',
  'angle-down': 'angle-down',
}

const iconSize = {
  sm: 15,
  md: 20,
  lg: 30,
  xl: 40,
}

export const mapType = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`

export const mapSize = (size) => iconSize[size]
