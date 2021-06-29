import React from 'react'
import Input from '../../atoms/Input/index'

export default {
  title: 'Atoms/Input',
  component: Input,
}

export const Text = () => (
  <Input onChange={() => {}} type="text" placeholder="Nombres" />
)