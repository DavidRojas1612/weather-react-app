import React, { Component } from 'react'
import Button from '../Atoms/Button'
import PropTypes from 'prop-types'
import ForecasItem from '../Molecules/ForecasItem';

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
        <ForecasItem />
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended
