import React from "react";

export default function ForecastDay(props) {
function maxTemp() {
let temperature = Math.round(props.data.temp.max);
return `${temperature} °C`;
}

function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature} °C`;
    }

function day() {

    let date = new Date(props.data.dt *1000);
    let day = date.getDay();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];

}

return (
    <div>
    <div classsName="ForecastDaily-day">
    {day()} </div>
    
    <img alt="Weathericon" src={props[0].weather[0].icon} size={32}></img> 
    
    <div className="ForecastDaily-temp">
    <span className="ForecastDaily-temp-max">
    {maxTemp()} 
    </span>
    
    <span className="ForecastDaily-temp-min">
    {minTemp()}
    </span>
    </div>
    </div>
)

}