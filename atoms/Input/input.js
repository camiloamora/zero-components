import React from 'react'
import PropTypes from 'prop-types'
import styles from './input.module.css'
import className from 'classnames'

const Input = ({ type, value, isInline, onChange, placeholder }) => (
  <input
    className={className(styles.input, {
      [styles['is-inline']]: isInline,
    })}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  ></input>
)

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  isInline: false,
  onChange: () => {},
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isInline: PropTypes.bool,
}

export default Input
