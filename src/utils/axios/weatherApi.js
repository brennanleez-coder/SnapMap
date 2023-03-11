import axios from 'axios';

import { notify } from '../toast/errors';

const baseURL = "https://api.data.gov.sg/v1/environment/";

export const fetchImmediateFourDayWeather = () => {
    return axios.get(`${baseURL}4-day-weather-forecast`)
        .then((res) => {
            return res?.data;

        }).catch((err) => {
            throw new Error("Error fetching immediate 4 day weather data.");
        }); 
  
}

export const fetchFourDayWeatherWithDate = (date) => {
    return axios.get(`${baseURL}4-day-weather-forecast?date=${date}`)
        .then((res) => {
            // console.log(res)
            return res?.data;

        }).catch((err) => {
            throw new Error("Error fetching 4 day weather data based on date.");
        }); 
  
}


export const fetchTwentyFourHourWeather = (date) => {
    return axios.get(`${baseURL}24-hour-weather-forecast?date=${date}`)
        .then((res) => {
            // console.log(res)
            return res?.data;
        })
        .catch((err) => {
            throw new Error("Error fetching 24h weather data.");
        });
}
