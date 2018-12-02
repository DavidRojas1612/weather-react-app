import React, {Fragment} from 'react'
import WeatherData from '../Molecules/WeatherData'
import Location from '../Atoms/Location'
import './weatherlocations.scss'
import Loader from '../Atoms/Loader'
import transfromData from '../../providers/trasnformWeather'
import {PropTypes} from 'prop-types'

const WeatherLocation = ({city:{name,...data}}) => { 
  let dataParse = transfromData(data)
  return (
    <article className='weatherArticle'>
        {
        data ?
          <Fragment>
            <Location city={name} />
            <WeatherData data={dataParse} />
          </Fragment> :
          <Loader/>
        }
    </article>
  )
}
  
WeatherLocation.propTypes = {
  city: PropTypes.object.isRequired,
}

export default WeatherLocation
