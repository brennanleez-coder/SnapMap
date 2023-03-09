import DatePicker from "../components/DatePicker"
import { useState } from "react";
// import dayjs from 'dayjs';
import { Container } from '../components/styles/Container.styled'
import ListOfLocations from "../components/ListOfLocations";

const WeatherTracker = () => {

    const [date, setDate] = useState("");

  return (
    <Container>
      <h1>Weather Tracker {date}</h1>
      {/* <h2>Search Locations for specified timing: {date && dayjs(new Date(date).toString()).format('YYYY-MM-DD HH:mm:ss')}</h2> */}
      <DatePicker setDate={setDate}/>
      <ListOfLocations date={date}/>
    </Container>
  )
}

export default WeatherTracker
