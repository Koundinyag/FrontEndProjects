import axios from 'axios';

function getCurrentWeather(location){
return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
)
}

export { getCurrentWeather}