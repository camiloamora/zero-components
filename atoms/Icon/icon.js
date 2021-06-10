import React from 'react'
import { mapType, mapSize } from './helpers'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Picture from '../Picture'

import styles from './icon.module.css'

const Icon = ({ type, size, hasBackground }) => (
  <div
    className={classNames(styles.icon, {
      [styles['has-background']]: hasBackground,
    })}
    style={{ width: mapSize(size), height: mapSize(size) }}
  >
    <Picture src={mapType(type)} width={mapSize(size)}></Picture>
  </div>
)

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  hasBackground: PropTypes.bool,
}

Icon.defaultProps = {
  size: 'md',
  hasBackground: false,
}

export default Icon
