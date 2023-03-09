import DatePicker from "../components/DatePicker"
import { useState } from "react";
// import dayjs from 'dayjs';

const WeatherTracker = () => {

    const [date, setDate] = useState("");

  return (
    <div>
      <h1>Weather Tracker</h1>
      {/* <h2>Search Locations for specified timing: {date && dayjs(new Date(date).toString()).format('YYYY-MM-DD HH:mm:ss')}</h2> */}
      <DatePicker setDate={setDate}/>
    </div>
  )
}

export default WeatherTracker
