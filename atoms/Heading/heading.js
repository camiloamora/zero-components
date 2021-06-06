import React from 'react'
import PropTypes from 'prop-types'
import './heading.css'
import classNames from 'classnames'

const Heading = ({ children, color, size }) => (
  <heading
    className={classNames('heading', {
      [`color-${color}`]: color,
      [`size-${size}`]: size,
    })}
  >
    {children}
  </heading>
)

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf['primary'],
  size: PropTypes.oneOf[('xs', 'sm', 'md')],
}

Heading.defaultProps = {
  size: 'md',
  color: 'default',
}

export default Heading
