import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './AddButton.module.css'
import Paragraph from '../../atoms/Paragraph'
import Icon from '../../atoms/Icon'
import Spacer from '../../layout/spacer'

const AddButton = ({ children, type }) => {
  return (
    <div
      className={classNames(styles['add-button'], {
        [styles[`type-${type}`]]: type,
      })}
    >
      <Icon type="arrow-right" size="sm" />
      <Spacer.Vertical size="xs" />
      <Paragraph>{children}</Paragraph>
    </div>
  )
}

AddButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
}

AddButton.defaultProps = {
  type: 'primary',
}

export default AddButton
