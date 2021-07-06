import React from 'react'
import Token from '../../tokens/Token'
import kebabCase from '../../utils/kebabCase'

import { choices } from '../../tokens'

export default {
  title: 'Tokens/Colors',
  component: Token.Color,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
}

export const Default = () => (
  <>
    <Token.Color
      color={choices.colors.brand.mediumPurple}
      label="var(--colors-brand-mediumPurple)"
      value={choices.colors.brand.mediumPurple}
    />
  </>
)

export const Brand = () => {
  const brandKeys = Object.keys(choices.colors.brand)
  return (
    <>
      {brandKeys.map((brandkey) => (
        <Token.Color
          key={brandkey}
          color={choices.colors.brand[brandkey]}
          label={`var(--colors-brand-${kebabCase(brandkey)})`}
          value={choices.colors.brand[brandkey]}
        />
      ))}
    </>
  )
}
