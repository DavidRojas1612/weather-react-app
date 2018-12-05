import transfromData from './trasnformWeather'
const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']

const trasformForecast = data =>
  data.list
    .filter(
      item =>
        new Date(item.dt * 1000).getUTCHours() === 6 ||
        new Date(item.dt * 1000).getUTCHours() === 12 ||
        new Date(item.dt * 1000).getUTCHours() === 18
    )
    .map(item => ({
      id: item.dt,
      weekDay: days[new Date(item.dt * 1000).getUTCDay()],
      hour: new Date(item.dt * 1000).getUTCHours(),
      data: transfromData(item)
    }))

export default trasformForecast
