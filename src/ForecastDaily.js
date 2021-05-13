import axios from 'axios';
import React, { useState } from 'react';
import  "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";


export default function ForecastDaily(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState (null);

function handleResponse(response) {
setForecast(response.data.daily);
setLoaded(true);
}
if (loaded) {
    return (
        <div className="ForecastDaily">
        <div className="row">
        <div className="col"> 
       <ForecastDay data={forecast[0]} />
        
        </div>
        </div>
        </div>
        
        
        );





} else {
    let apiKey="a8b18d5e574b14c1d3de44331ec7e970";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return null;

}

}