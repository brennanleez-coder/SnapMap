import { useEffect, useState } from 'react';
import { fourDayWeatherForecastApiMockData as mockForecast} from '../../utils/mockData'
import { StyledButton } from '../styles/Button.styled'
import { fetchImmediateFourDayWeather } from '../../utils/axios/weatherApi';
import { notify as notifySuccess } from '../../utils/toast/success';
import { notify as notifyError } from '../../utils/toast/errors'
import { StyledForecastItem, StyledForecastList} from '../styles/FourDayForecast.styled';


const FourDayWeatherToggle = ({date, showFourDayWeather,setShowFourDayWeather }) => {
    const [forecast, setForecast] = useState(null);

    const ForecastItem = ({ date, forecast, humidity, temperature, wind }) => {
      return (
        <StyledForecastItem>
          <h3>{date}</h3>
          <p>{forecast}</p>
          <p>Humidity: {humidity?.low}% - {humidity?.high}%</p>
          <p>Temperature: {temperature?.low}°C - {temperature?.high}°C</p>
          <p>Wind Speed: {wind?.speed?.low} km/h - {wind?.speed?.high} km/h</p>
          <p>Wind Direction: {wind?.direction}</p>
        </StyledForecastItem>
      );
    };
    
  const ForecastList = ({ forecasts }) => {
    return (
      <StyledForecastList>
        {forecasts.map((item) => (
          <ForecastItem
            key={item.timestamp}
            date={item.date}
            forecast={item.forecast}
            humidity={item.relative_humidity}
            temperature={item.temperature}
            wind={item.wind}
          />
        ))}
      </StyledForecastList>
    );
  };

    useEffect(() => {
      fetchImmediateFourDayWeather()
      .then((res) => {
        setForecast(res)
        notifySuccess("Immediate 4 day weather forecast successfully retrieved")
      })
      .catch((err) => {
        notifyError(err.message)
      });
    }, [date]);


    return (
    <>
        <StyledButton 
        color="#FFA600"
        style={{
            display: "flex",
            margin: "20px auto",
            marginBottom: "20px"

        }}
        onClick={() => setShowFourDayWeather(!showFourDayWeather)}>Coming Weather Forecast (4 days)</StyledButton>
        {showFourDayWeather && <ForecastList forecasts={forecast.items[0].forecasts} />}
    </>
    )
}

export default FourDayWeatherToggle