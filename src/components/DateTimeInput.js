import React from 'react'
import { StyledDateTimeInput } from './styles/DateTimeInput.styled'
import { useState } from 'react'

const DateTimeInput = () => {
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0,19));

    const handleDateTimeChange = (e) => {
        setDateTime(e.target.value);
        console.log(e.target.value)
    }
    
  return (
    <StyledDateTimeInput>
        <label htmlFor="date">Date</label>
        <input type="datetime-local"
            name="datetime"
            value={dateTime}
            onChange={handleDateTimeChange}
        />
    </StyledDateTimeInput>
  )
}

export default DateTimeInput
