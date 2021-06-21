import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './card.module.css'

const Card = ({ color, size, children }) => {
  return (
    <div
      className={classNames(styles.card, {
        [styles[`color-${color}`]]: color,
        [styles[`size-${size}`]]: size,
      })}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Card.defaultProps = {
  color: 'default',
  size: 'sm',
}

export default Card
