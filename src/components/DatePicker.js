import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DateComponent } from '@mui/x-date-pickers/DatePicker';
import { TimePicker as TimeComponent} from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { Flex } from './styles/Flex.styled';
import { useEffect, useReducer } from 'react';

export default function DatePicker({setDate}) {
    const initialDateTime = dayjs();

    const initialState = {
        date: initialDateTime.toISOString().split('T')[0],
        time: initialDateTime.toISOString().split('T')[1].split('.')[0]
    }
    const reducer = (state, action) => {
        switch(action.type) {
            case 'setDateState':
                return {
                    ...state,
                    date: action.payload
                }
            case 'setTimeState':
                return {
                    ...state,
                    time: action.payload
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);



    useEffect(() => {
        setDate(state.date + 'T' + state.time)
    }, [state])
        
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Flex>
            <DateComponent
            disableFuture
            defaultValue={initialDateTime}
            
            onChange={(date) => {
                dispatch({type: 'setDateState', payload: date.toISOString().split('T')[0]})
            }}
            />
            <TimeComponent
            label="Time"
            defaultValue={initialDateTime}
            onChange={(date) => {
                dispatch({type: 'setTimeState', payload: date.toISOString().split('T')[1].split('.')[0]})
            }}
            disableFuture
            />

        </Flex>
        
    </LocalizationProvider>
  );
}