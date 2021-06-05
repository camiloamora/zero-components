import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './button.css'

const Button = ({ type, children, isBlock }) =>
  console.log('>>>', type) || (
    <button
      className={classNames('button', {
        [`type-${type}`]: type,
        'is-block': isBlock && type !== 'tertiary',
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
