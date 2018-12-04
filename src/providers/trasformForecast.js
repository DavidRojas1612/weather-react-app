const trasformForecast = (data) => (
  data.list.filter(item => (
    new Date(item.dt * 1000).getUTCHours() === 6 ||
    new Date(item.dt * 1000).getUTCHours() === 12 ||
    new Date(item.dt * 1000).getUTCHours() === 18
  ))
)

export default trasformForecast
