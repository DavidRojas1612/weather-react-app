import React from 'react'
import WeatherData from '../Molecules/WeatherData'
import './weatherlocations.scss'
import Loader from '../Atoms/Loader'
import transfromData from '../../providers/trasnformWeather'
import { PropTypes } from 'prop-types'

const WeatherLocation = ({
  onWeatherLocationClick,
  city: { name, ...data }
}) => {
  let dataParse = transfromData(data)
  return (
    <article className='weatherArticle' onClick={onWeatherLocationClick}>
      {data ? (
        <WeatherData city={`${name}, ${data.sys.country}`} data={dataParse} />
      ) : (
        <Loader />
      )}
    </article>
  )
}

WeatherLocation.propTypes = {
  city: PropTypes.object.isRequired,
  onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation
