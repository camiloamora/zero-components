// FIXME: Move as asset file
import 'minireset.css'
import '../styles/globals.css'
import '../styles/tokens.css'

import React from 'react'

export const decorators = [
  (Story) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Story />
    </div>
  ),
]
