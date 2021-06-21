import React from 'react'
import Avatar from '../../atoms/Avatar'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
}

const Template = (props) => <Avatar {...props} />

export const Default = Template.bind({})

Default.args = {
  src: 'http://placeimg.com/200/200/people',
}
