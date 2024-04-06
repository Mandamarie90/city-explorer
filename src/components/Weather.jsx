import React from 'react';

function Weather(props) {
  return (
    <div className="row">
      {props.weather.map((day, index) => (
        <div key={index} className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{day.date}</h3>
              <p className="card-text">Forecast: {day.forecast}</p>
              <p className="card-text">Low: {day.low}</p>
              <p className="card-text">High: {day.high}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Weather;
