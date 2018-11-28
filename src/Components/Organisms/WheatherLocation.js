import React from 'react'
import WeatherData from '../Molecules/WeatherData'
import Location from '../Atoms/Location'
const WeaterLocation = () => (
  <div>
    <Location city='Barcelona' />
    <WeatherData />
  </div>
)

export default WeaterLocation
