// 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; 
import AcUnitIcon from '@mui/icons-material/AcUnit'; 
import WbSunnyIcon from '@mui/icons-material/WbSunny'; 
import "./infoBox.css";

export default function InfoBox({ info }) {

  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100";
  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee";
  const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            
            image={
              info.humidity > 80 
                ? RAIN_URL 
                : info.temp > 15 
                  ? HOT_URL 
                  : COLD_URL
            }
            title="weather image"
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
            <Typography variant="body2" color="text.secondary" component="span">
              <div>
                <p>Temperature: {info.temp}&deg;C</p>
                <p>Humidity: {info.humidity}%</p>
                <p>Min Temp: {info.tempMin}&deg;C</p>
                <p>Max Temp: {info.tempMax}&deg;C</p>
                <p>
                  The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                </p>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}