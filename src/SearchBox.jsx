
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "629461638797d3bf15876aa24ea95833"; 

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      
      if (!response.ok) {
        throw new Error("City not found");
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setError(false); 
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity(""); 
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <TextField
        className="input"
          id="city"
          label="City Name"
          variant="outlined"
          size="small"
          value={city}
          required
          onChange={handleChange}
        />
        
        <Button 
          type="submit" 
          variant="contained" 
          size="medium" 
          endIcon={<SendIcon />}
        >
          Search
        </Button>
      </form>
      
      {error && (
        <p style={{ color: "red" }}>
          Sorry, we don't have weather report of this place!
        </p>
      )}
    </div>
  );
}