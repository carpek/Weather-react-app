import React, { useState } from 'react';
import axios from "axios";
import "./Weather.css";
import CurrentWeather from './CurrentWeather';

export default function Weather (props) {
const [ready, setReady] = useState(false);
const [weatherData, setWeatherData] = useState({ ready: false});
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
    setWeatherData({
ready: true,
temperature: response.data.main.temp,
humidity: response.data.main.humidity,
wind: response.data.main.wind.speed,
date: new Date (response.data.dt * 1000),
city: response.data.name,
description: Cloudy,
iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
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
        </div>
        </div>
      )

}

else {
search();
return "Loading...";
}

}