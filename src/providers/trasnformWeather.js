import { 
  CLOUD,
  SUN,
  DRIZZLE,
  RAIN,
  THUNDER,
  SNOW,
 } from '../constants/weathers'

const getWeatherState = weather => {
  const {id} = weather;
  if(id < 300) return THUNDER
  if(id < 500) return DRIZZLE
  if(id < 600) return RAIN
  if(id < 700) return SNOW
  if(id < 900) return SUN;
  return CLOUD

}

const transfromData = weatherData => {
  const {humidity, temp} = weatherData.main
  const { speed } = weatherData.wind
  const weatherState = getWeatherState(weatherData.weather[0])
  return {
    humidity,
    temperature: temp,
    weatherState,
    wind: speed
  }
}

export default transfromData
