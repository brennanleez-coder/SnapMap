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
            return res?.data;

        }).catch((err) => {
            throw new Error("Error fetching 4 day weather data based on date.");
        }); 
  
}


export const fetchTwentyFourHourWeather = (date) => {
    return axios.get(`${baseURL}24-hour-weather-forecast?date=${date}`)
        .then((res) => {
            return res?.data;
        })
        .catch((err) => {
            throw new Error("Error fetching 24h weather data.");
        });
}


export const fetchWeatherFromLocation = (date, latitude, longitude) => {
    return axios.get(`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date=${date}`)
            .then((res) => {
                const { area_metadata, items } = res.data;

                // Find the area with the matching latitude and longitude
                //exact match of area
                let exactArea = area_metadata.find(
                    (a) => a.label_location.latitude === latitude && a.label_location.longitude === longitude
                );
                // If no exact match, find the nearest area
                let nearestArea;
                if (!exactArea) {
                    let distances = area_metadata.map((a) => {
                        const dx = a.label_location.latitude - latitude;
                        const dy = a.label_location.longitude - longitude;
                        return { area: a, distance: Math.sqrt(dx * dx + dy * dy) };
                    });
                    //sort by nearest distance
                    distances.sort((a, b) => a.distance - b.distance);
                    // nearest area
                    nearestArea = distances[0].area; 
                }
                //match area with area_metadata
                let areaName = exactArea ? exactArea.name : nearestArea.name;

                const forecast = items[0].forecasts.find((f) => f.area === areaName).forecast;
                
                const response = {
                    exactArea,
                    nearestArea,
                    forecast
                }
                return response;
            })
            .catch((err) => {
                throw new Error(err);
            }
        );
    }



    export const fetchWeather2 = (date) => {
        return axios.get(`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date=2023-03-01`)
                .then((res) => {
                    const { area_metadata, items } = res.data;
    
                // Find the area with the matching latitude and longitude
                let latitude = 1.374;
                let longitude = 103.838;
                //exact match of area to lat lon
                let exactArea = area_metadata.find(
                    (a) => a.label_location.latitude === latitude && a.label_location.longitude === longitude
                );
    
                // If no exact match, find the nearest area
                let nearestArea;
                if (!exactArea) {
    
                    let distances = area_metadata.map((a) => {
                        const dx = a.label_location.latitude - latitude;
                        const dy = a.label_location.longitude - longitude;
                        return { area: a, distance: Math.sqrt(dx * dx + dy * dy) };
                    });
                    //sort by nearest distance
                    distances.sort((a, b) => a.distance - b.distance);
                    // nearest area
                    nearestArea = distances[0].area; 
                }
                let areaName = exactArea.name || nearestArea.name;
    
                //match area with area_metadata
    
                let forecast = items[0].forecasts.find((f) => f.area === areaName ).forecast
                // console.log(forecast)
                return {
                    exactArea: exactArea.name,
                    nearestArea: nearestArea.name,
                    forecast: forecast
                }
            })
            .catch((err) => {
                throw new Error("Error fetching weather forecast from location.");
            });
        }