import React, { useState } from 'react';
import axios from "axios";
import "./Weather.css";

export default function Weather (props) {
const [ready, setReady] = useState(false);
const [weatherData, setWeatherData] = useState({ ready: false});

function handleResponse(responsept) {
    setWeatherData({
ready: true,
temperature: response.data.main.temp,
humidity: response.data.main.humidity,
wind: response.data.main.wind.speed,
date: "Sunday, 17:45",
city: response.data.name,
description: Cloudy,
iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });
  
}

if (weatherData.ready) {
    return (
        <div className="Weather"> 
        
        <form>
        <div className="row">
        <div className="col-9">
            <input 
            type="search" 
            placeholder="Type a city" 
            autoFocus="on"
            className="form-control"/>
            </div>
           
        <div className="col-3">   
            <input type="submit" 
            value="Search" 
            className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>
        
        <h1>{weatherData.city}</h1>
        <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
        <div className="col-6">
        <div className="clearfix">
            <img src={weatherData.iconUrl} 
            alt="cloudy"
            className="float-left" />
        <span className="temperature">{Math.round(weatherData.temperature)}</span> 
        <span className="unit">°C</span>
        </div>
        </div>
        <div className="col-6">
            <ul>
        <li>
        Precipitation: 72%
        </li>
        <li>
        Humidity: {weatherData.humidity}%
        </li>
        <li>
        Wind: {weatherData.wind} km/h
        </li>
        
            </ul>
        </div>
        </div>
        
        </div>
        
        )

}

else {
const apiKey="a8b18d5e574b14c1d3de44331ec7e970";

let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

}