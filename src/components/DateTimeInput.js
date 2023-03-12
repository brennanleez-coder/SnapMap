import { StyledDateTimeInput } from './styles/DateTimeInput.styled'

const DateTimeInput = ({ date, setDate}) => {

    const handleDateTimeChange = (e) => {
        setDate(e.target.value);
    }

  return (
    <StyledDateTimeInput>
        <label htmlFor="date">Date</label>
        <input type="datetime-local"
            name="datetime"
            max={new Date().toISOString().split(".")[0]}
            value={date}
            onChange={handleDateTimeChange}
        />
    </StyledDateTimeInput>
  )
}

export default DateTimeInput
