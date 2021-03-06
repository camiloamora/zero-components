import React from 'react'
import Heading from '../../atoms/Heading/index'

export default {
  title: 'Atoms/Heading',
  component: Heading,
}

export const Default = () => <Heading>Heading</Heading>

export const Colors = () => (
  <>
    <Heading color="default">Default Color</Heading>
    <Heading color="primary">Primary Color</Heading>
  </>
)

export const Sizes = () => (
  <>
    <Heading size="xs">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Heading>
    <Heading size="sm">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Heading>
    <Heading size="md">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Heading>
    <Heading size="lg">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Heading>
    <Heading size="xl">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Heading>
    <Heading size="2xl">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Heading>
  </>
)

// export const Primary = () => <Heading color="primary">Heading</Heading>
// export const Small = () => <Heading size="sm">Heading</Heading>
// export const SuperSmall = () => <Heading size="xs">Heading</Heading>
