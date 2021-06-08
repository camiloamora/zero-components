import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { choices } from '../../tokens'
import './spacer.css'

const getSize = (size) => choices.spacing[size]

const Horizontal = ({ size, isVisible }) => (
  <div
    className={classNames('spacer', {
      'is-visible': isVisible,
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
