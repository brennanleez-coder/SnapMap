import React, {useState, useEffect } from 'react'
import { StyledCard } from './styles/Card.styled'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error('Unable to fetch Locations! Try again later.',
  {
    style: {
      padding: '16px',
      color: '#713200',
      borderRadius: '10px',
      }
  }
);

const baseURL = 'https://api.data.gov.sg/v1/transport/'


const ListOfLocations = ({date}) => {
    const [locations, setLocations] = useState([]);

   useEffect(() => {
         axios.get(baseURL + `traffic-images?date_time=${date}`)
            .then(res => {
                console.log(res?.data?.items)
                setLocations(res?.data?.items?.cameras)
            })
            .catch(err => {
                toast.error('Unable to fetch Locations! Try again later.',
                {
                    style: {
                    padding: '16px',
                    color: '#713200',
                    borderRadius: '10px',
                    }
                }
                );
            })
    }, [date])
  return (
    <StyledCard>
        asdd
      <h1>asdasd</h1>
    </StyledCard>
  )
}

export default ListOfLocations
