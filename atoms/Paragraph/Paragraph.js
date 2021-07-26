import React from 'react'
import PropTypes from 'prop-types'
import styles from './Paragraph.module.css'
import { getClasses } from '../../helpers/styles'

const Paragraph = ({ children, className, size, color, weight }) => {
  const classes = getClasses(styles)({ color, size, weight })
  return (
    <div
      className={classes(className, 'paragraph', ['color', 'size', 'weight'])}
    >
      {children}
    </div>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['base', 'muted', 'inverted']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  weight: PropTypes.oneOf(['normal', 'medium']),
  className: PropTypes.string,
}

Paragraph.defaultProps = {
  color: 'base',
  size: 'md',
  weight: 'normal',
}

export default Paragraph
