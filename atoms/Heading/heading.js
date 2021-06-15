import React from 'react'
import PropTypes from 'prop-types'
import styles from './heading.module.css'
import classNames from 'classnames'

const Heading = ({ children, color, size }) => (
  <heading
    className={classNames(styles.heading, {
      [styles[`color-${color}`]]: color,
      [styles[`size-${size}`]]: size,
    })}
  >
    {children}
  </heading>
)

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'default']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
}

Heading.defaultProps = {
  size: 'md',
  color: 'default',
}

export default Heading
