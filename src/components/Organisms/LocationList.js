import React from 'react'
import './LocationList.scss'
import WeatherLocation from './WeatherLocation'
import PropTypes from 'prop-types'

const LocationList = ({data, onSelectedLocation}) => {
  const handleWeatherLocationClick = city => {
    onSelectedLocation(city)
  }

  const getWeatherCities = data => {
    return data.map(city =>
      <WeatherLocation
        onWeatherLocationClick={() => handleWeatherLocationClick(city.id)}
        key={city.id}
        city={city}
      />
    )
  }

  return (
    <div className='ListContainer'>
      {data && getWeatherCities(data)}
    </div>
  )
}

LocationList.propTypes = {
  onSelectedLocation: PropTypes.func
}

export default LocationList
