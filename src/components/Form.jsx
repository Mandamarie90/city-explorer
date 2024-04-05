
import { useState } from 'react';

function CityForm(props) {
  const [city, setCity]= useState('');
  
  function handleChange(event) {
    setCity(event.target.value);
  }
  
function handleSubmit(event) {
  event.preventDefault();
  props.handleSearch(city);
}

return (
  <form onSubmit={handleSubmit}>
    <input
    type="text"
    placeholder="Enter city name"
    onChange={handleChange}
    />
    <button type="submit">Search</button>
  </form>
)
}
export default CityForm;
 