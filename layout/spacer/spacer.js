import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { choices } from '../../tokens'
import styles from './spacer.module.css'
import Horizontal from './horizontal'
import Vertical from './vertical'

const getSize = (size) => choices.spacing[size]

const Spacer = ({ size, isVisible }) => (
  <div
    className={classNames(styles.spacer, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      display: 'inline-block',
      width: getSize(size),
      height: getSize(size),
    }}
  />
)

Spacer.propTypes = {
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
}

Spacer.Horizontal = Horizontal
Spacer.Vertical = Vertical

export default Spacer
