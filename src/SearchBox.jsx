import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState('');
  let [error, setError] = useState(false);
  const API_URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;

let getWeatherInfo = async (city) => {
  try {
 let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

  let jsonResponce = await responce.json();
   let result = {
    city: jsonResponce.name,
   temp: jsonResponce.main.temp,
   tempMin: jsonResponce.main.temp_min,
   tempMax: jsonResponce.main.temp_max,
   humidity: jsonResponce.main.humidity,
   feelslike: jsonResponce.main.feels_like,
   weather: jsonResponce.weather[0].main,
    description: jsonResponce.weather[0].description,
   };
   console.log(result);
  return result;
  } catch (error) {
    throw error;
  }
};

 

let handleChange = (evt) => {
  setCity(evt.target.value);
};
let handleSubmit = async (evt) => {
  try {
  evt.preventDefault();
  console.log(city);
  setCity("");
  let newInfo = await getWeatherInfo(city);
  updateInfo(newInfo);
} catch (error) {
  setError(true);
}
};

  return (
    <div className="search-box">
     
      <form onSubmit={handleSubmit}>
      <TextField id="city" 
      label="City Name" 
      variant="outlined" 
      required 
      value={city} 
      onChange={handleChange}/>

      <br /><br />
      <Button variant="contained" type='submit'>
        Search
      </Button>
      {error && <p style={{color: 'red'}}>City not found !</p>}
      </form>
    </div>
  )
}
