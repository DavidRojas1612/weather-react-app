import React from 'react'
import WeatherTemperature from '../Atoms/WatherTemperature'
import WeatherExtraInfo from '../Atoms/WeatherExtraInfo'
import './weatherdata.scss'
import {
  SNOW
} from '../../constants/weathers'

const WeatherData = () => (
  <div className='weatherDataContent'>
    <WeatherTemperature temperature={20} weatherState={SNOW} />
    <WeatherExtraInfo humidity={80} wind={10} />
  </div>
)

export default WeatherData
