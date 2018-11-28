import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import './watherTemperature.scss'
import {
  CLOUD,
  RAIN,
  CLOUDY,
  SNOW,
  SUN,
  WINDY
} from '../../constants/weathers'
const icons = {
  [CLOUD]: 'cloud',
  [RAIN]: 'rain',
  [CLOUDY]: 'cloudy',
  [SNOW]: 'snow',
  [SUN]: 'sun',
  [WINDY]: 'windy'
}

const getWeatherIcon = (weatherState) => {
  const icon = icons[weatherState]
  const sizeIcon = '4x'
  if (icon) return <WeatherIcons className='wicon' name={icon} size={sizeIcon} />
  else return <WeatherIcons className='wicon' name={'day-sunny'} size={sizeIcon} />
}

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className='weatherContent'>
    {
      getWeatherIcon(weatherState)
    }
    <span className='temperature'>{temperature}</span>
    <span className='temperature-type'>C°</span>
  </div>
)

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature
