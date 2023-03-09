import DatePicker from "../components/DatePicker"
import { useState } from "react";
import dayjs from "dayjs";
const WeatherTracker = () => {

    const [date, setDate] = useState(dayjs());
    console.log(date.toISOString())
  return (
    <div>
      <h1>Weather Tracker</h1>
      <DatePicker />
    </div>
  )
}

export default WeatherTracker
