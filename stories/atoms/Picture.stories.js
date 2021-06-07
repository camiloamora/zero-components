import React from 'react'
import Picture from '../../atoms/Picture'

export default {
  title: 'Atoms/Picture',
  component: Picture,
}

export const Default = () => (
  <Picture src="http://placeimg.com/200/480/any" width={200} />
)
