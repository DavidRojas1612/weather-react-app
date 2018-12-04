import React, { Component, Fragment } from 'react'
import Button from '../Atoms/Button'
import PropTypes from 'prop-types'
import ForecastItem from '../Molecules/ForecastItem';
import { getUrlForecastByCity } from '../../providers/getUrlWeatherByCity';
import Loader from '../Atoms/Loader';
import trasformForecast from '../../providers/trasformForecast';

class ForecastExtended extends Component {
state = {
  data:null,
  loading:true
}
  onHandleBackPage = () =>{
    this.props.handleBackpage()
  }

  handleGetCity = () => {
    const { city } = this.props 
    const apiUrl = getUrlForecastByCity(city);
    fetch(apiUrl)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        console.log(data)
        const forecastData = trasformForecast(data)
        console.log(forecastData)
        // this.setState({
        //   data: forecastData,
        //   loading: false
        // });
      })
      .catch(e => console.log(e));
  };
      
  componentDidMount() {
    this.handleGetCity();
  }

  render () {
    const {data, loading} = this.state
    const { city } = this.props
    return (
      <div>
        {
          data && (
            <Fragment>
              <Button onClick={()=>this.onHandleBackPage()}>
                atrás
              </Button>
              {city}
              <ForecastItem />
            </Fragment>
          )
        }
        {loading && <Loader />}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.number.isRequired
}

export default ForecastExtended
