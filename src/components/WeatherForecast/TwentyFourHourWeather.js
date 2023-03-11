import { StyledButton } from "../styles/Button.styled";
import {
  WeatherWrapper,
  WeatherList,
  WeatherItem,
  WeatherPeriod,
} from "../styles/TwentyFourHourForecast.styled";
import { fetchTwentyFourHourWeather } from "../../utils/axios/weatherApi";
import { useEffect, useState } from "react";
import {notify as notifyError} from "../../utils/toast/errors";
import {notify as notifySuccess} from "../../utils/toast/success";



const TwentyFourHourForecast = (
  {
    date,
    showTwentyFourHourForecast,
    setShowTwentyFourHourForecast
  }
) => {


  const [forecastData, setForecastData] = useState(null);
  useEffect(() => {
    fetchTwentyFourHourWeather(date)
      .then((res) => {
        setForecastData(res);
        notifySuccess("24h weather forecast data fetched successfully.");
      })
      .catch((err) => {
        notifyError(err.message);
      });   
    }, [date])

    // const general = forecastData?.items?.[0]?.general;
    const periods = forecastData?.items?.[0]?.periods;



  

  return (
    <>
        <StyledButton 
        style={{
            //centre button
            display: "flex",
            margin: "20px auto",
            marginBottom: "20px"

        }}
        onClick={() => setShowTwentyFourHourForecast(!showTwentyFourHourForecast)}>24h Forecast</StyledButton>
        {showTwentyFourHourForecast && 
        <WeatherWrapper>  
          <WeatherList>
            {periods.map((period) => (
              <WeatherItem key={period.time.start}>
                <WeatherPeriod>{period.time.start}</WeatherPeriod>
                <div>West: {period.regions.west}</div>
                <div>East: {period.regions.east}</div>
                <div>Central: {period.regions.central}</div>
                <div>South: {period.regions.south}</div>
                <div>North: {period.regions.north}</div>
              </WeatherItem>
            ))}
          </WeatherList>
      </WeatherWrapper>
      }
    </>
    
  );
};

export default TwentyFourHourForecast;
