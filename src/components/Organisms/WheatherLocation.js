import React, {Component} from 'react'
import WeatherData from '../Molecules/WeatherData'
import Location from '../Atoms/Location'
import './weatherlocations.scss'
import { CLOUD } from '../../constants/weathers'
import transfromData from '../../providers/trasnformWeather'
import apiWeather from '../../constants/API'
import Button from '../Atoms/Button'



const data = {
  temperature: 5,
  weatherState: CLOUD,
  humidity: 40,
  wind: 12
}

class WeaterLocation extends Component {
  state = {
    city: 'buenos aires',
    data: data
  }


  handleUpdateClick = () => {
    fetch(apiWeather).then(resolve =>{
      return resolve.json();
    }).then(data => {
      const dataParse = transfromData(data);
      this.setState({
        data: dataParse
      })
    });
  }

  render () {
    const {city, data} = this.state
    return (
      <article className='weatherArticle'>
        <Location city={city} />
        <WeatherData data={data} />
        <Button onClick={this.handleUpdateClick}>
          Actualizar
        </Button>
      </article>
    )
  }
}

export default WeaterLocation



