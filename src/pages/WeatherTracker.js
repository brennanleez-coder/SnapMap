import { useState } from "react";
import ListOfLocations from "../components/ListOfLocations";
import { PopUpModal } from '../components/styles/PopupModal.styled';
import { StyledImage } from '../components/styles/PopupModal.styled';
import DatePicker from "../components/DatePicker";
import FourDayWeatherToggle from "../components/WeatherForecast/FourDayWeatherToggle";
import TwentyFourHourForecast from "../components/WeatherForecast/TwentyFourHourWeather";
import {FourDayDateBasedToggle} from "../components/WeatherForecast/FourDayDateBasedToggle";
import { getYYYYMMDDFromISOString } from "../utils/date";
import DateTimeInput from "../components/DateTimeInput";

const WeatherTracker = () => {
    const [date, setDate] = useState("2023-03-01T06:21:18+08:00");
    const [showModal, setShowModal] = useState(false);
    const [showFourDayWeather, setShowFourDayWeather] = useState(false);
    const [showFourDayDateBasedWeather, setShowFourDayDateBasedWeather] = useState(false);
    const [showTwentyFourHourForecast, setShowTwentyFourHourForecast] = useState(false);

    
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
            <FourDayWeatherToggle
            date={date}
            showFourDayWeather={showFourDayWeather}
            setShowFourDayWeather={setShowFourDayWeather}
            />
            {/* based on current Api timing so itll show next four days */}
            <DatePicker setDate={setDate}/>
            <DateTimeInput/>
            {/* <FourDayDateBasedToggle
            date={getYYYYMMDDFromISOString(date)}
            showFourDayDateBasedWeather={showFourDayDateBasedWeather}
            setShowFourDayDateBasedWeather={setShowFourDayDateBasedWeather}
            /> */}

            <TwentyFourHourForecast
            date={getYYYYMMDDFromISOString(date)}
            showTwentyFourHourForecast={showTwentyFourHourForecast}
            setShowTwentyFourHourForecast={setShowTwentyFourHourForecast}
            />
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
