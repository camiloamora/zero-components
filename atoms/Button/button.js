import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './button.module.css'

const Button = ({ type, children, isMuted, isInline, onClick }) =>
  console.log('>>>', type) || (
    <button
      className={classNames(styles.button, {
        [styles[`type-${type}`]]: type,
        [styles['is-inline']]: isInline || type === 'tertiary',
        [styles['is-muted']]: isMuted && type === 'primary',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  onClick: PropTypes.func,
  isInline: PropTypes.bool,
  isMuted: PropTypes.bool,
}

Button.defaultProps = {
  type: 'primary',
  onClick: () => {},
  isBlock: true,
}

export default Button
