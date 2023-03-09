import Header from './components/Header.js';
import { ThemeProvider } from 'styled-components';
import WeatherTracker from './pages/WeatherTracker.js';


const theme = {
  colors: {
    header: '#fff',
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
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </>
    </ThemeProvider>
  );
}

export default App;
