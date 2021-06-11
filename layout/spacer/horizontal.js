import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './spacer.module.css'
import { getSize } from './helpers'

const Horizontal = ({ size, isVisible }) => (
  <div
    className={classNames(styles.spacer, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      display: 'block',
      width: '100%',
      height: getSize(size),
    }}
  />
)

Horizontal.propTypes = {
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
}

export default Horizontal
