import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './button.module.css'

const Button = ({ type, children, isBlock }) =>
  console.log('>>>', type) || (
    <button
      className={classNames(styles.button, {
        [styles[`type-${type}`]]: type,
        [styles['is-block']]: isBlock && type !== 'tertiary',
      })}
    >
      {children}
    </button>
  )

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf[('primary', 'secondary', 'tertiary')],
  isBlock: PropTypes.boolean,
}

Button.defaultProps = {
  type: 'primary',
  isBlock: true,
}

export default Button
