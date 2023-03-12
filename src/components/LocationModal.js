import { useEffect, useState } from 'react';
import { getDateOrTimeFromISOString } from '../utils/date.js'
import { fetchWeatherFromLocation } from '../utils/axios/weatherApi'
import { StyledImage } from './styles/PopupModal.styled.js';

const LocationModal = ({imgUrl, location, date}) => {
    const [forecastData, setForecastData] = useState({})

    const {latitude, longitude} = location;


          // console.log(dateTime) 2023-03-12T15:09:49
    //provide singapore lat and lon
    // const promise = (fetchWeatherForecastFromLocation(1.375,103.839, dateTime))

    useEffect(() => {
        fetchWeatherFromLocation(getDateOrTimeFromISOString(date)[0], latitude, longitude)
            .then((res) => {
                setForecastData(res)
                console.log(res)
            })
            .catch((err) => {
                // console.log(err)
            })           
    }, [date, latitude, longitude])
    

      return (
          <>
            <StyledImage src={imgUrl} alt="" />
            { !forecastData?.exactArea
                ?
                <div>
                    <h1>Exact area forecast is not available at the moment</h1>
                    <h1>Nearest Area: {forecastData?.nearestArea?.name}</h1>
                </div>
                :
                <h1>Area: {forecastData?.exactArea?.name}</h1>
            }

            
            <h2>Weather Forecast: {forecastData?.forecast}</h2>

          </>
      )
  }

export default LocationModal
