import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { choices } from '../../tokens'
import styles from './spacer.module.css'

const getSize = (size) => choices.spacing[size]

const Vertical = ({ size, maxHeight, isVisible }) => (
  <div
    className={classNames(styles.spacer, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      display: 'block',
      width: getSize(size),
      maxHeight: maxHeight,
      height: '100vh',
    }}
  />
)

Vertical.defaultProps = {
  maxHeight: '100%',
}

Vertical.propTypes = {
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Vertical
