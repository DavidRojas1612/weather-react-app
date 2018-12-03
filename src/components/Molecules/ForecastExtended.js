import React, { Component } from 'react'
import Button from '../Atoms/Button'
import PropTypes from 'prop-types'

class ForecastExtended extends Component {
  render () {
    const {city, handleBackpage} = this.props
    return (
      <div>
        <Button onClick={handleBackpage}>
            atrás
        </Button>
        {city}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended
