import { CLOUDY } from '../constants/weathers'

const getWeatherState = weatherData => {
  return CLOUDY
}

const transfromData = weatherData => {
  const {humidity, temp} = weatherData.main
  const { speed } = weatherData.wind
  const weatherState = getWeatherState(weatherData)
  return {
    humidity,
    temperature: temp,
    weatherState,
    wind: speed
  }
}

export default transfromData
