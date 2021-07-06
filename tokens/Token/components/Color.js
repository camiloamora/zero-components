import React from 'react'
import styles from '../Token.module.css'
import PropTypes from 'prop-types'

const Color = ({ color, label, value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.color} style={{ background: color }}></div>
      <div className={styles.description}>
        <span className={styles.label}>{label}</span>
        <span className={styles.label}>{value}</span>
      </div>
    </div>
  )
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Color
