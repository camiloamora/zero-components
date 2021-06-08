import React from 'react'
import PropTypes from 'prop-types'
import './input.css'

const Input = ({ type, value, onChange, placeholder }) => (
  <input
    className="input"
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
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf['text'],
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Input
