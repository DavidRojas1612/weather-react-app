import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import WeatherData from '../Molecules/WeatherData';
import { getUrlForecastByCity } from '../../providers/getUrlWeatherByCity';
import Loader from '../Atoms/Loader';
import trasformForecast from '../../providers/trasformForecast';
import './ForecastExtended.scss'
class ForecastExtended extends Component {
state = {
  data:null,
  loading:true
}

  handleGetCity = () => {
    const { city } = this.props 
    const apiUrl = getUrlForecastByCity(city.id);
    fetch(apiUrl)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        const forecastData = trasformForecast(data)
        this.setState({
          data: forecastData,
          loading: false
        });
      })
      .catch(e => console.log(e));
  };

  renderForecastDays = (data) =>{
    return data.map( ({id,weekDay, hour,data}) => (
      <WeatherData key={id} city={`${weekDay}, ${hour} hs`} data={data}/>
    ))
  }
      
  componentDidMount() {
    this.handleGetCity();
  }

  render () {
    const {data, loading } = this.state
    return (
      <div className="ForecastContent">
        {
          data && (
            <Fragment>
              {
                this.renderForecastDays(data)
              }
            </Fragment >
          )
        }
        {loading && <Loader />}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.object.isRequired
}

export default ForecastExtended
