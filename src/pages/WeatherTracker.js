import { useState } from "react";
import ListOfLocations from "../components/ListOfLocations";
import { PopUpModal } from '../components/styles/PopupModal.styled';
import { StyledImage } from '../components/styles/PopupModal.styled';
import DatePicker from "../components/DatePicker";
import { FourDayWeatherToggle } from "../components/WeatherForecast/FourDayWeather";
const WeatherTracker = () => {
    const [date, setDate] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showFourDayWeather, setShowFourDayWeather] = useState(false);

    
    const [modalContent, setModalContent] = useState(null);

    const ModalContent = ({imgUrl}) => {
      const {latitude, longitude} = modalContent.location;
  
      return (
          <>
              <StyledImage src={imgUrl} alt="" />
              <h2>Latitude: {latitude}, Longitude: {longitude}</h2>
          </>
      )
  }

    const handleModalOpen = (camera) => {
        setModalContent(camera);
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
        setModalContent(null);
    }

    return (
        <>
            <DatePicker setDate={setDate}/>
            <FourDayWeatherToggle showFourDayWeather={showFourDayWeather} setShowFourDayWeather={setShowFourDayWeather} />
            
            <ListOfLocations date={date} handleModalOpen={handleModalOpen} />
            { showModal && 
                <PopUpModal isOpen={showModal} onClose={handleModalClose}>
                    <ModalContent imgUrl={modalContent.image} />
                </PopUpModal>
            }
        </>
    )
}



export default WeatherTracker;
