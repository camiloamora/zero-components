import React from 'react'
import Icon from '../../atoms/Icon'

export default {
  title: 'Atoms/Icon',
  component: Icon,
}

export const Default = () => <Icon name="arrowRight" />
export const Clickable = () => <Icon name="plusCircle" />
export const Backgrounds = () => (
  <Icon key="0" name="arrowRight" background="inverted" />
)
