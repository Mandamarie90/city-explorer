
import './map.css'; 

const CityMap = ({ latitude, longitude }) => {
  const mapImageBaseUrl = 'https://maps.locationiq.com/v3/staticmap';
  const apiKey = 'pk.528f8982f861ee1f55ac03e37f36214c'; 
  const mapUrl = `${mapImageBaseUrl}?center=${latitude},${longitude}&zoom=12&size=400x300&markers=color:red%7Clabel:A%7C${latitude},${longitude}&key=${apiKey}`;

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">City Map</h5>
        <img src={mapUrl} alt="Map" className="card-img-top img-fluid" />
      </div>
    </div>
  );
};

export default CityMap;
