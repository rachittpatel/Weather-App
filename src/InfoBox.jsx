import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) { 
  const INIT_URL = "https://tse4.mm.bing.net/th?id=OIP.CM0EepoSvrMgKaZ9WtGvcQHaE2&pid=Api&P=0&h=220";

  let COLD_URL = "https://tse3.mm.bing.net/th?id=OIP.IYKw1bKIHfY_6vB1pPkheAHaEc&pid=Api&P=0&h=220";
  let HOT_URL = "https://tse2.mm.bing.net/th?id=OIP.Nx49YTpFOgW99ob0nLInTQHaEK&pid=Api&P=0&h=220";
  let RAINY_URL = "https://i.ytimg.com/vi/RR4qALfav5w/maxresdefault.jpg";

  return (
    <div className='InfoBox'>
     
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ? RAINY_URL 
          : info.temp > 15
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80 
          ? <ThunderstormIcon />
          : info.temp > 15
          ? <WbSunnyIcon />
          : <AcUnitIcon />
        }
        </Typography>
        <Typography variant="body2" color='text.secondary' component={"span"} >
          <p>Temprature = {info.temp}&deg;C</p>
          <p>Min Temprature = {info.tempMin}&deg;C</p>
          <p>Max Temprature = {info.tempMax}&deg;C</p>
          <p>Humidity = {info.humidity}%</p>
          <p>The Weather can be described as <i>{info.weather}</i> and feels like{""} {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
  }
    
  