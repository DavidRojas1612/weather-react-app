import React from 'react'
import PropTypes from 'prop-types'
import './weatherExtraInfo.scss'
const WeatherExtraInfo = ({humidity, wind}) => (
  <div className='weatherContent'>
    <span className='extraInfo'>{`Humedad: ${humidity}% - `}</span>
    <span className='extraInfo'>{`Vientos: ${wind}m/s`}</span>
  </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired
}
export default WeatherExtraInfo
