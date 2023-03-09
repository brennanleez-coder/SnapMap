import DatePicker from "../components/DatePicker"
import { useState } from "react";
// import dayjs from 'dayjs';
import { Container } from '../components/styles/Container.styled'
import ListOfLocations from "../components/ListOfLocations";

const WeatherTracker = () => {

    const [date, setDate] = useState("");

  return (
    <Container>
      <DatePicker setDate={setDate}/>
      <ListOfLocations date={date} />
    </Container>
  )
}

export default WeatherTracker
