import React from 'react'
import PropTypes from 'prop-types'
import styles from './dropdown.module.css'
import Icon from '../../atoms/Icon'

const Dropdown = ({ options, onChange }) => (
  <div className={styles.dropdown}>
    <Icon type="angle-down" hasBackground />
    <select className={styles.dropdownSelect} onChange={onChange}>
      {options.map(({ text, value }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  </div>
)

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
}

Dropdown.defaultProps = {
  value: '',
}

export default Dropdown
