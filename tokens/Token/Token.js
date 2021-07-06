import React from 'react'
import PropTypes from 'prop-types'
import Color from './components/Color'

const Token = () => {
  return <div></div>
}

Token.Color = Color

Token.propTypes = {
  children: PropTypes.node.isRequired,
}

Token.defaultProps = {}

export default Token
