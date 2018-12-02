import {API_KEY,url} from '../constants/API'

export const getUrlWeatherByCity = (cities) =>{
    return `${url}group?id=${cities}&units=metric&appid=${API_KEY}`
}

