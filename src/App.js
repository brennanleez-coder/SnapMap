import Header from './components/Header.js';
import { ThemeProvider } from 'styled-components';
import WeatherTracker from './pages/WeatherTracker.js';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer.js';

const theme = {
  colors: {
    header: '#fff',
    body: '#fff',
    footer: '#003333',
    cheese: '#FFA600',
  },
  
}
const isMobile = window.innerWidth < 768;
const toastLocation = (isMobile) ? 'top-center' : 'bottom-right';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <Header/>
      <WeatherTracker/>
      <Toaster
        position={toastLocation}
      />
      <Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;
