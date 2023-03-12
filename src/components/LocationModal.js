import { useEffect, useState } from 'react';
import { getDateOrTimeFromISOString } from '../utils/date.js'
import { fetchWeatherFromLocation } from '../utils/axios/weatherApi'
import { StyledImage } from './styles/PopupModal.styled.js';
import {notify as notifyError} from '../utils/toast/errors.js';
import {notify as notifySuccess} from '../utils/toast/errors.js';

const LocationModal = ({imgUrl, location, date}) => {
    const [forecastData, setForecastData] = useState({})

    const {latitude, longitude} = location;

    useEffect(() => {
        fetchWeatherFromLocation(getDateOrTimeFromISOString(date)[0], latitude, longitude)
            .then((res) => {
                setForecastData(res)
                notifySuccess("Location forecast data fetched successfully.")
            })
            .catch((err) => {
                notifyError(err.message)
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
