
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DateComponent } from '@mui/x-date-pickers/DatePicker';
import { TimePicker as TimeComponent} from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Flex } from './styles/Flex.styled';

export default function DatePicker({setDate}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Flex>
            <DateComponent label="Date"
            value={dayjs()}
            onChange={(newValue) => {
                console.log(newValue.toString());
            }}
         />
        <TimeComponent label="Time"
            value={dayjs()}
            onChange={(newValue) => {
                console.log(newValue.toISOString());
            }}
        />

        </Flex>
        
    </LocalizationProvider>
  );
}