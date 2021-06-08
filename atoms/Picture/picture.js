import React from 'react'
import PropTypes from 'prop-types'
import { getWidth } from './helper'

import './picture.css'

const Picture = ({ src, width }) => (
  <picture className="picture">
    <img src={src} style={{ maxWidth: getWidth(width) }}></img>
  </picture>
)

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default Picture
