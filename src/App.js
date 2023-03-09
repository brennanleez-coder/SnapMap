import { Container } from './components/styles/Container.styled.js';
import Header from './components/Header.js';
import { ThemeProvider } from 'styled-components';
import WeatherTracker from './pages/WeatherTracker.js';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  
}


function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <Header/>
      <WeatherTracker/>
    </>
    </ThemeProvider>
  );
}

export default App;
