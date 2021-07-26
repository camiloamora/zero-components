import React from 'react'
import Input from '../../atoms/Input/index'

export default {
  title: 'Atoms/Input',
  component: Input,
}

export const Default = () => (
  <Input onChange={() => {}} type="text" placeholder="Nombres" />
)

export const Value = () => (
  <Input
    onChange={() => {}}
    type="text"
    value="Others mainly cakehole Thorin moldy facial."
  />
)

export const Inline = () => <Input onChange={() => {}} type="text" isInline />
