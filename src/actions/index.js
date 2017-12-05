import axios from 'axios';

const API_KEY = 'f9725c2ea02928f8096cee473f9f9658';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  // request
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}


// https://api.openweathermap.org/data/2.5/forecast?appid=f9725c2ea02928f8096cee473f9f9658&q=chicago,us
