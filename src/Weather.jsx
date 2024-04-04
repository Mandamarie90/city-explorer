import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ lat, lon }) => {
  const [forecasts, setForecasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`/weather?lat=${lat}&lon=${lon}`);
        setForecasts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : forecasts.length > 0 ? (
        <div>
          <h2>Weather Forecast</h2>
          <ul>
            {forecasts.map((forecast, index) => (
              <li key={index}>
                <p>Date: {forecast.date}</p>
                <p>Description: {forecast.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No forecast available</p>
      )}
    </div>
  );
};

export default Weather;
