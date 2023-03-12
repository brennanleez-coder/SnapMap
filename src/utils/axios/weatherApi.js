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





export const fetchWeatherForecastFromLocation = (latitude, longitude, dateTime) => {

    let endpoint;
    let dateTime = null
    if (dateTime) {
        endpoint = `2-hour-weather-forecast?date_time=${dateTime}`
    } else if (date) {
        endpoint = `2-hour-weather-forecast?date=${date}`
    } else {
        endpoint = null;
    }


    if (!endpoint) throw new Error("Error fetching weather forecast from location. Invalid date or date time.")



    return axios.get(`${baseURL}${endpoint}`)
        .then((res) => {
            const { area_metadata, items } = res.data;

            // Find the area with the matching latitude and longitude
            let area = area_metadata.find(
                (a) => a.label_location.latitude === latitude && a.label_location.longitude === longitude
            );

            // If no exact match, find the nearest area
            if (!area) {
                let distances = area_metadata.map((a) => {
                    const dx = a.label_location.latitude - latitude;
                    const dy = a.label_location.longitude - longitude;
                    return { area: a, distance: Math.sqrt(dx * dx + dy * dy) };
                });
                //sort by nearest distance
                distances.sort((a, b) => a.distance - b.distance);
                area = distances[0].area;
                return area //should be an array 
            } else { //exact match
                
                return [items[0].forecasts.find((f) => f.area === area.name)] //should be a single value
            }
        })
        .catch((err) => {
            throw new Error("Error fetching weather forecast from location.");
        });
    }
