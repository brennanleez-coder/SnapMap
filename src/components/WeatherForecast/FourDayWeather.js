import { fourDayWeatherForecastApiMockData as forecast} from '../../utils/mockData'
import { StyledButton } from '../styles/Button.styled'

const ForecastItem = ({ date, forecast, humidity, temperature, wind }) => {
    return (
      <div 
        style={{
          // border: "1px solid black",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      
      >
        <h3>{date}</h3>
        <p>{forecast}</p>
        <p>Humidity: {humidity.low}% - {humidity.high}%</p>
        <p>Temperature: {temperature.low}°C - {temperature.high}°C</p>
        <p>Wind Speed: {wind.speed.low} km/h - {wind.speed.high} km/h</p>
        <p>Wind Direction: {wind.direction}</p>
      </div>
    );
  };
  
  const ForecastList = ({ forecasts }) => {
    return (
      <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "20px",
        margin: "0 auto",
        // border: "1px solid black",

      }}
    >
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
      </div>
    );
  };

export const FourDayWeatherToggle = ({showFourDayWeather,setShowFourDayWeather }) => {
    return (
    <>
        <StyledButton 
        style={{
            //centre button
            display: "flex",
            margin: "20px auto",
            marginBottom: "20px"

        }}
        onClick={() => setShowFourDayWeather(!showFourDayWeather)}>Show 4 day Weather Forecast</StyledButton>
        {showFourDayWeather && <ForecastList forecasts={forecast.items[0].forecasts} />}
    </>
    )
}