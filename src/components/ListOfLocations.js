import React, {useState, useEffect } from 'react'
import { ClickableCard } from './styles/Card.styled'
import { notify as notifyError} from '../utils/toast/errors'
import {LocationContainer} from './styles/LocationContainer.styled'
import { fetchCameras } from '../utils/axios/trafficImages'
import { reverseGeocoding } from '../utils/axios/reverseGeocoding'
import { PopUpModal } from './styles/PopupModal.styled'
import { notify as notifySuccess } from '../utils/toast/success'
import { StyledImage } from './styles/PopupModal.styled'
import { convertDate } from '../utils/date.js'
import styled from 'styled-components'



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
    

    const handleModalOpen = (camera) => {
        setModalContent(camera);
        setShowModal(true);
        console.log(camera.image)
    }


    const forecast = {
        "items": [
          {
            "update_timestamp": "2023-03-11T05:02:12+08:00",
            "timestamp": "2023-03-11T04:38:00+08:00",
            "forecasts": [
              {
                "temperature": {
                  "low": 24,
                  "high": 33
                },
                "date": "2023-03-12",
                "forecast": "Afternoon thundery showers",
                "relative_humidity": {
                  "low": 60,
                  "high": 95
                },
                "wind": {
                  "speed": {
                    "low": 10,
                    "high": 15
                  },
                  "direction": "NE"
                },
                "timestamp": "2023-03-12T00:00:00+08:00"
              },
              {
                "temperature": {
                  "low": 23,
                  "high": 34
                },
                "date": "2023-03-13",
                "forecast": "Fair and windy",
                "relative_humidity": {
                  "low": 50,
                  "high": 90
                },
                "wind": {
                  "speed": {
                    "low": 10,
                    "high": 25
                  },
                  "direction": "NNE"
                },
                "timestamp": "2023-03-13T00:00:00+08:00"
              },
              {
                "temperature": {
                  "low": 24,
                  "high": 33
                },
                "date": "2023-03-14",
                "forecast": "Afternoon showers",
                "relative_humidity": {
                  "low": 55,
                  "high": 95
                },
                "wind": {
                  "speed": {
                    "low": 10,
                    "high": 20
                  },
                  "direction": "NE"
                },
                "timestamp": "2023-03-14T00:00:00+08:00"
              },
              {
                "temperature": {
                  "low": 24,
                  "high": 33
                },
                "date": "2023-03-15",
                "forecast": "Afternoon showers",
                "relative_humidity": {
                  "low": 55,
                  "high": 95
                },
                "wind": {
                  "speed": {
                    "low": 10,
                    "high": 20
                  },
                  "direction": "NE"
                },
                "timestamp": "2023-03-15T00:00:00+08:00"
              }
            ]
          }
        ],
        "api_info": {
          "status": "healthy"
        }
      }

        const formatDate = (date) => {
          const options = { weekday: 'short', month: 'short', day: 'numeric' };
          return new Date(date).toLocaleDateString('en-US', options);
        };


    
        const ForecastItem = ({ date, forecast, humidity, temperature, wind }) => {
            return (
              <div>
                <h3>{date}</h3>
                <p>{forecast}</p>
                <p>Humidity: {humidity.low}% - {humidity.high}%</p>
                <p>Temperature: {temperature.low}°C - {temperature.high}°C</p>
                <p>Wind Speed: {wind.speed.low} km/h - {wind.speed.high} km/h</p>
                <p>Wind Direction: {wind.direction}</p>
              </div>
            );
          };
          
          const ForecastList = ({ forecasts }) => {
            return (
              <div>
                {forecasts.map((item) => (
                  <ForecastItem
                    key={item.timestamp}
                    date={item.date}
                    forecast={item.forecast}
                    humidity={item.relative_humidity}
                    temperature={item.temperature}
                    wind={item.wind}
                  />
                ))}
              </div>
            );
          };
      
      

    const ModalContent = ({imgUrl}) => {
        const {latitude, longitude} = modalContent.location;
        const [weather, setWeather ] = useState(true);
        // const {imgUrl} = modalContent.image
        return (
        <>
            <StyledImage src={imgUrl} alt="" />
            <h2>Latitude: {latitude}, Longitude: {longitude}</h2>

            <ForecastList forecasts={forecast.items[0].forecasts} />
        </>
        )
    }
      
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
        { showModal && 
        <PopUpModal isOpen={showModal} onClose={handleModalClose}>
              <ModalContent imgUrl={modalContent.image}/>
        </PopUpModal>
        }   
        </>

    );
};

export default ListOfLocations;