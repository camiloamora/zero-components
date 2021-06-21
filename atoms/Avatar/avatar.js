import React from 'react'
import Picture from '../Picture'
import styles from './avatar.module.css'
import classNames from 'classnames'

import PropTypes from 'prop-types'

import { mapSize } from './helpers'

const Avatar = ({ src, size }) => {
  return (
    <div className={classNames(styles.avatar)}>
      <Picture
        src={src}
        width={mapSize(size)}
        height={mapSize(size)}
        isRounded
      />
    </div>
  )
}

Avatar.defaultProps = {
  size: 'md',
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

export default Avatar
