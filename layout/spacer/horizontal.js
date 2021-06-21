import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './spacer.module.css'
import { getSize } from './helpers'

const Horizontal = ({ size, isVisible }) => (
  <div
    className={classNames(styles.spacer, styles.horizontal, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      height: getSize(size),
    }}
  />
)

Horizontal.propTypes = {
  size: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
}

export default Horizontal
