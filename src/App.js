import Header from './components/Header.js';
import { ThemeProvider } from 'styled-components';
import WeatherTracker from './pages/WeatherTracker.js';
import { Toaster } from 'react-hot-toast';


const theme = {
  colors: {
    header: '#fff',
    body: '#fff',
    footer: '#003333',
    cheese: '#FFA600',
  },
  
}


function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <Header/>
      <WeatherTracker/>
      <Toaster />
    </>
    </ThemeProvider>
  );
}

export default App;
