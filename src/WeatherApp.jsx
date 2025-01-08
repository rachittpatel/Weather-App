import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from 'react';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "delhi",
    temp: "32",
    tempMin: "24",
    tempMax: "24",
    humidity: "72",
    feelslike: "28",
    weather: "23",
    description: "sunny",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };


  return (
    <div style={{textAlign: 'center'}}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}