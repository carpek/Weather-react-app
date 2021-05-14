import React, { useState } from 'react';
import axios from "axios";
import "./Weather.css";
import CurrentWeather from './CurrentWeather';
import ForecastDaily from './ForecastDaily';

export default function Weather (props) {

const [weatherData, setWeatherData] = useState({ ready: false});
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
    setWeatherData({
ready: true,
coordinates: response.data.coord,
temperature: response.data.main.temp,
humidity: response.data.main.humidity,
wind: response.data.wind.speed,
date: new Date (response.data.dt * 1000),
city: response.data.name,
description: response.data.weather[0].description,
iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  
}

function search() {
    const apiKey="a8b18d5e574b14c1d3de44331ec7e970";

    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

}

function handleSubmit(event) {
event.preventDefault();
search();
}

function handleCity(event){
 setCity(event.target.value);  

}

if (weatherData.ready) {
    return (
        <div className="Weather"> 
        
        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-9">
            <input 
            type="search" 
            placeholder="Type a city" 
            autoFocus="on"
            onChange={handleCity}
            className="form-control"/>
            </div>
           
        <div className="col-3">   
            <input type="submit" 
            value="Search" 
            className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>
        <div>
            <CurrentWeather data={weatherData} />
<div>
            <img
                      src={weatherData.iconUrl}
                      alt="weather condition icon"
                      className="float-left"
                    />
</div>
            <ForecastDaily coordinates={weatherData.coordinates}/>
        </div>
        </div>
      )

}

else {
search();
return "Loading...";
}

}