import React from 'react'
import Picture from '../../atoms/Picture'

export default {
  title: 'Atoms/Picture',
  component: Picture,
}

export const Default = () => (
  <Picture src="http://placeimg.com/400/400/any" width={200} />
)

export const IsRounded = () => (
  <Picture src="http://placeimg.com/400/400/any" width={200} isRounded />
)
