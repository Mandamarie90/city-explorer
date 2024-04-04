
import { useState } from 'react';
import axios from 'axios';
import CityMap from './map'; 
import './form.css'; 

const CityForm = () => {
  const [city, setCity] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${import.meta.env.VITE_LOCATIONIQ_API_KEY}&q=${city}&format=json`);
      const { data } = response;
      setLocationData(data[0]);
      setError(null);
    } catch (error) {
      setError('Error fetching data. Please try again.');
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="cityInput" className="form-label">Enter City Name:</label>
          <input 
            type="text" 
            className="form-control" 
            id="cityInput" 
            value={city} 
            onChange={handleChange} 
            placeholder="Enter city name" 
            required 
          />
        </div>
        <button type="submit" className="btn-primary">Explore!</button>
      </form>
      {locationData && (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Location Information</h5>
            <p className="card-text"><strong>City Name:</strong> {locationData.display_name}</p>
            <p className="card-text"><strong>Latitude:</strong> {locationData.lat}</p>
            <p className="card-text"><strong>Longitude:</strong> {locationData.lon}</p>
            <CityMap latitude={locationData.lat} longitude={locationData.lon} />
          </div>
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default CityForm;
 