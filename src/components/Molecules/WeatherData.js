import React from 'react'
import WeatherTemperature from '../Atoms/WeatherTemperature'
import WeatherExtraInfo from '../Atoms/WeatherExtraInfo'
import './weatherdata.scss'
import PropTypes from 'prop-types'
const WeatherData = ({data: {temperature, humidity, weatherState, wind}}) => (
  <div className='weatherDataContent'>
    <WeatherTemperature temperature={temperature} weatherState={weatherState} />
    <WeatherExtraInfo humidity={humidity} wind={wind} />
  </div>
)

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
  })
}

export default WeatherData
