import React from 'react'
import { mapType, mapSize } from './helpers'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Picture from '../Picture'

import styles from './icon.module.css'

const Icon = ({ id, className, type, size, hasBackground }) => (
  <div
    id={id}
    className={classNames(className, styles.icon, {
      [styles['has-background']]: hasBackground,
    })}
    style={{ width: mapSize(size), height: mapSize(size) }}
  >
    <Picture src={mapType(type)} width={mapSize(size)} />
  </div>
)

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  hasBackground: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
}

Icon.defaultProps = {
  size: 'md',
  hasBackground: false,
}

export default Icon
