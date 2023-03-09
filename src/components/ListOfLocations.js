import React, {useState, useEffect } from 'react'
import { StyledCard } from './styles/Card.styled'
import axios from 'axios'
import { notify } from '../utils/toast/errors'
import {LocationContainer} from './styles/LocationContainer.styled'
import { fetchCameras } from '../utils/axios/trafficImages'
import { reverseGeocoding } from '../utils/axios/reverseGeocoding'
import WeatherCard from './WeatherCard'
import styled from 'styled-components'
import { CustomPopup } from './styles/PopupModal.styled'

const ListOfLocations = ({date}) => {
    const [cameras, setCameras] = useState([]);
    const [locationNames, setLocationNames] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchCameras(date)
            .then(cameras => {
                setCameras(cameras);
                // Reverse geocode each camera location
                const locationPromises = cameras.map(camera => reverseGeocoding(camera?.location?.latitude, camera?.location?.longitude));
                Promise.all(locationPromises)
                    .then(names => setLocationNames(names))
                    .catch(err => notify("Error fetching location data."));
            })
            .catch(err => notify(err.message));
    }, [date]);

    const handleModalClose = () => {
        setShowModal(false);
    }

    const handleModalOpen = () => {
        setShowModal(true);
    }

    return (
        <>
            <LocationContainer>
            {cameras.length === 0 && <h2>No cameras found</h2>}
            {cameras.length > 0 &&
                cameras.map((camera, index) => (
                    <StyledCard key={index}>
                        <h2>{camera?.camera_id}</h2>
                        <h3>{camera?.timestamp}</h3>
                        <p>{locationNames[index]}</p>
                        <button onClick={handleModalOpen}>View Image</button>
                        {showModal && (
                            <CustomPopup imageUrl={camera?.image} onClose={handleModalClose} />
                        )}
                    </StyledCard>
                ))
            }
        </LocationContainer>
            <WeatherCard />
        </>
    );
};

export default ListOfLocations;