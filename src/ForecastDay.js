import React from "react";

export default function ForecastDay(props) {
return (
    <div>
    <div classsName="ForecastDaily-day">
    {props[0].dt} </div>
    
    <img alt="Weathericon" src={props[0].weather[0].icon} size={32}></img> 
    
    <div className="ForecastDaily-temp">
    <span className="ForecastDaily-temp-max">
    {Math.round(props[0].temp.max)}°C 
    </span>
    
    <span className="ForecastDaily-temp-min">
    {Math.round(props[0].temp.min)}°C
    </span>
    </div>
    </div>
)

}