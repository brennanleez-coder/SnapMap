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
import {getDateOrTimeFromISOString,} from "../../utils/date";


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
        color="#FFA600"
        style={{
            //centre button
            display: "flex",
            margin: "20px auto",
            marginBottom: "20px"

        }}
        onClick={() => setShowTwentyFourHourForecast(!showTwentyFourHourForecast)}>24 Hour Forecast</StyledButton>
        {showTwentyFourHourForecast && 
        <WeatherWrapper>  
          <WeatherList>
            {periods.map((period) => {
              return (
                <WeatherItem key={period.time.start}>
                  <WeatherPeriod>
                    {getDateOrTimeFromISOString(period?.time?.start)[0]}
                    <br/>
                    {getDateOrTimeFromISOString(period?.time?.start)[1]}
                  </WeatherPeriod>
                  <p>West: {period?.regions?.west}</p>
                  <p>East: {period?.regions?.east}</p>
                  <p>Central: {period?.regions?.central}</p>
                  <p>South: {period?.regions?.south}</p>
                  <p>North: {period?.regions?.north}</p>
                </WeatherItem>
              )
              }
            )}
          </WeatherList>
      </WeatherWrapper>
      }
    </>
    
  );
};

export default TwentyFourHourForecast;
