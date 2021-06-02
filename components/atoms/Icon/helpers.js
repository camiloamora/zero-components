const ICONS_ASSETS_PATH = '/icons/';

const iconMap = {
    'right-arrow': 'right-arrow'
};

export const mapType = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`;

export const mapSize = (size) => null