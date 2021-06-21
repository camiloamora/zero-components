import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './spacer.module.css'
import { getSize } from './helpers'

const Vertical = ({ size, maxHeight, isVisible }) => (
  <div
    className={classNames(styles.spacer, styles.vertical, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      maxHeight: maxHeight,
      // height: '100vh',
      width: getSize(size),
    }}
  />
)

Vertical.defaultProps = {
  maxHeight: '100%',
}

Vertical.propTypes = {
  size: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Vertical
