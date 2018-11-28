import React from 'react'
import PropTypes from 'prop-types'
import './Location.scss'
const Location = ({city}) => (
  <header>
    <h1>
      {city}
    </h1>
  </header>
)

Location.propTypes = {
  city: PropTypes.string.isRequired
}
export default Location
