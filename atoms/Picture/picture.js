import React from 'react'
import PropTypes from 'prop-types'
import { getWidth } from './helper'
import classNames from 'classnames'

import styles from './picture.module.css'

const Picture = ({ src, width, height, isRounded }) => (
  <picture
    className={classNames(styles.picture, {
      [styles['is-rounded']]: isRounded,
    })}
  >
    <img src={src} style={{ height, maxWidth: getWidth(width) }}></img>
  </picture>
)

Picture.defaultProps = {
  height: 'auto',
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isRounded: PropTypes.bool,
}

export default Picture
