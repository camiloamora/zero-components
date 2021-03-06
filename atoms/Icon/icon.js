import React from 'react'
import PropTypes from 'prop-types'
import { iconsMap, mapSize } from './helpers'

import styles from './icon.module.css'
import { options } from './constants'
import withStyles from '../../hok/withStyles'

const Icon = ({ id, className, onClick, name, size, styles }) => {
  const icon = iconsMap[name]
  const mappedSize = mapSize(size)

  return (
    <div
      id={id}
      className={styles(className, 'icon', ['color', 'size', 'background'], {
        'is-clickable': !!onClick,
      })}
      style={{ width: mappedSize, height: mappedSize }}
      onClick={onClick}
    >
      <svg
        viewBox={icon.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        width={mappedSize}
        height={mappedSize}
      >
        {icon.svg}
      </svg>
    </div>
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(options.names).isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(options.sizes),
  color: PropTypes.oneOf(options.colors),
  background: PropTypes.oneOf(options.backgrounds),
  id: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.func.isRequired,
}

Icon.defaultProps = {
  size: 'sm',
  color: 'base',
  background: 'transparent',
}

export default withStyles(styles)(Icon)
