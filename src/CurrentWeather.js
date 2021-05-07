import React from 'react';
import CurrentDate from "./CurrentDate";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentWeather(props) {
    return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul>
    <li>
        <CurrentDate date={props.data.date} />
        </li>
    <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-3">
    <div className="col-6">
    <div className="clearfix">
        <img src={props.data.iconUrl} 
        alt={props.data.description}
        className="float-left" />
        <WeatherTemperature celcius={Math.round(props.data.temperature)}/>

    
    </div>
    </div>
    <div className="col-6">
        <ul>
    
    <li>
    Humidity: {props.data.humidity}%
    </li>
    <li>
    Wind: {props.data.wind} km/h
    </li>
    
        </ul>
    </div>
    </div>
    </div>

    );
}