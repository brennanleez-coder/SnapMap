import React, {useState, useEffect } from 'react'
import { ClickableCard } from './styles/Card.styled'
import axios from 'axios'
import { notify as notifyError} from '../utils/toast/errors'
import {LocationContainer} from './styles/LocationContainer.styled'
import { fetchCameras } from '../utils/axios/trafficImages'
import { reverseGeocoding } from '../utils/axios/reverseGeocoding'
import WeatherCard from './WeatherCard'
import styled from 'styled-components'
import { PopUpModal } from './styles/PopupModal.styled'
import { notify as notifySuccess } from '../utils/toast/success'
const ListOfLocations = ({date}) => {
    const [cameras, setCameras] = useState([]);
    const [locationNames, setLocationNames] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
        fetchCameras(date)
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
    }, [date]);

    const handleModalClose = () => {
        setShowModal(false);
        setModalContent(null);
    }

    const handleModalOpen = (content) => {
        setModalContent(content);
        setShowModal(true);
    }
    return (
        <>
            <LocationContainer>
            {cameras.length === 0 && <h2>No cameras found</h2>}
            {cameras.length > 0 &&
                cameras.map((camera, index) => (
                    <ClickableCard
                    onClick={() => handleModalOpen(
                        <h1>hi la AHHAH IT WORKS</h1>
                    )}
                    key={index}>
                        <h2>{camera?.camera_id}</h2>
                        <h3>{camera?.timestamp}</h3>
                        <p>{locationNames[index]}</p>
                    </ClickableCard>
                ))
            }
        </LocationContainer>
        { showModal && 
        <PopUpModal isOpen={showModal} onClose={handleModalClose}>
              {modalContent}
            </PopUpModal>
        }   
        </>

    );
};

export default ListOfLocations;