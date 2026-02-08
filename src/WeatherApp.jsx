import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import "./box.css"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Indore",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze"
    });
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return (
        
        <div style={{textAligh:"centre"}}> 
        
            <div className="box">
                <h2 id="head">WEATHER TODAY APP</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
            </div>
        </div>
        
    )
}