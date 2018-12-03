import React, { Component } from 'react'
import Button from '../Atoms/Button'
import PropTypes from 'prop-types'

class ForecastExtended extends Component {

  onHandleBackPage = () =>{
    this.props.handleBackpage()
  }
  render () {
    const { city } = this.props

    return (
      <div>
        <Button onClick={()=>this.onHandleBackPage()}>
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
