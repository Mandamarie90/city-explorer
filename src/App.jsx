import { useState } from 'react'
import axios from 'axios';

import CityForm from './components/Form.jsx';
import City from './components/City.jsx';
import Map from './components/Map.jsx';
import Weather from './components/Weather.jsx';
import Movies from './components/Movies.jsx';

const API = import.meta.env.VITE_API_URL;

function App() {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState([]);
  const [movies, setMovies] = useState([]);

  async function handleSearch(city) {
    try {
      let locationURL = `${API}/location?city=${city}`;
      let response = await axios.get(locationURL);
      let data = response.data;
      
      // Check if latitude and longitude are available
      if (data.latitude && data.longitude) {
        setLocation(data);
        getWeather(data.latitude, data.longitude);
        getMovies(data.latitude, data.longitude);
      } else {
        console.error('Latitude or longitude is undefined in the backend response:', data);
      }
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  }

  async function getMovies(latitude, longitude) {
    try {
      let url = `${API}/movies?latitude=${latitude}&longitude=${longitude}`;
      let response = await axios.get(url);
      let data = response.data;
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies data:', error);
    }
  }

  async function getWeather(latitude, longitude) {
    try {
      let url = `${API}/weather?latitude=${latitude}&longitude=${longitude}`;
      let response = await axios.get(url);
      let data = response.data;
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  return (
    <>
      <CityForm handleSearch={handleSearch} />
      <City location={location} />
      <Map location={location} />
      <Weather weather={weather} />
      <Movies movies={movies} /> 
    </>
  )
}

export default App
