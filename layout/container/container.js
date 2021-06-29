import React from 'react'
import styles from './container.module.css'
import PropTypes from 'prop-types'

const Container = () => {
  return <div className={styles.container} />
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
