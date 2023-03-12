import { ClickableCard } from './styles/Card.styled'
import {LocationContainer} from './styles/LocationContainer.styled'
import { fetchCameras } from '../utils/axios/trafficImages'
import { reverseGeocoding } from '../utils/axios/reverseGeocoding'
import { notify as notifyError} from '../utils/toast/errors'
import { notify as notifySuccess } from '../utils/toast/success'
import { convertDate, getDateOrTimeFromISOString } from '../utils/date.js'
import { useState, useEffect } from 'react'
import { fetchWeatherFromLocation } from '../utils/axios/weatherApi'

const ListOfLocations = ({dateTime, handleModalOpen}) => {
    const [cameras, setCameras] = useState([]);
    const [locationNames, setLocationNames] = useState([]);

    useEffect(() => {
        fetchCameras(dateTime)
            .then(cameras => {
                setCameras(cameras);
                // Reverse geocode each camera location
                const locationPromises = cameras.map(camera => reverseGeocoding(camera?.location?.latitude, camera?.location?.longitude));
                Promise.all(locationPromises)
                    .then(names => setLocationNames(names))
                    .catch(err => notifyError("Error fetching location data."));
                notifySuccess("Cameras fetched successfully.")
            })
            .catch(err => notifyError(err.message));
    }, [dateTime]);

    // console.log(dateTime) 2023-03-12T15:09:49
    //provide singapore lat and lon
    // const promise = (fetchWeatherForecastFromLocation(1.375,103.839, dateTime))

    fetchWeatherFromLocation(getDateOrTimeFromISOString(dateTime)[0], 1.375,103.839,)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            // console.log(err)
        })

    
    return (
        <>
            <LocationContainer>
                {cameras.length === 0 && <h2>No cameras found</h2>}
                {cameras.length > 0 &&
                    cameras.map((camera, index) => (
                        <ClickableCard
                            onClick={() => handleModalOpen(camera)}
                            key={index}>
                            <h2
                                style={{textDecoration: "underline"}}
                            >Camera ID: {camera?.camera_id}</h2>
                            <h3>{convertDate(camera?.timestamp)}</h3>
                            <p>{locationNames[index]}</p>
                        </ClickableCard>
                    ))
                }
            </LocationContainer>
        </>
    );
};

export default ListOfLocations;
