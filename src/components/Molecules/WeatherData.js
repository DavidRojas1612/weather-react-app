import React from 'react'
import WeatherTemperature from '../Atoms/WeatherTemperature'
import WeatherExtraInfo from '../Atoms/WeatherExtraInfo'
import './weatherdata.scss'
import Location from '../Atoms/Location'
import PropTypes from 'prop-types'

const WeatherData = ({city, data: {temperature, humidity, weatherState, wind}}) => (
  <div className="weather-data__content">
    <div className="weather-data__info">
      <Location city={city}/>
      <WeatherTemperature temperature={temperature} weatherState={weatherState} />
    </div>
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
