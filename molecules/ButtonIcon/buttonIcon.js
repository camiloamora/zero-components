import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import Spacer from '../../layout/spacer/spacer'

const ButtonIcon = ({ children, type, icon }) => (
  <Button type={type} isBlock={false}>
    {children}
    <Spacer.Vertical size="xs"></Spacer.Vertical>
    <Icon type={icon}></Icon>
  </Button>
)

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
}

ButtonIcon.defaultProps = {
  type: 'secondary',
}

export default ButtonIcon
