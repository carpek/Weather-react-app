import axios from 'axios';
import React from 'react';
import  "./WeatherForecast.css";


export default function ForecastDaily(props) {

function handleResponse(response) {


}

let apiKey="a8b18d5e574b14c1d3de44331ec7e970";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return (
<div className="ForecastDaily">
<div className="row">
<div className="col"> 
<div classsName="ForecastDaily-day">
Thu </div>

<img alt="Weathericon" src={props.data.iconUrl} size={32}></img> 

<div className="ForecastDaily-temp">
<span className="ForecastDaily-temp-max">
19 
</span>

<span className="ForecastDaily-temp-min">
10
</span>
</div>

</div>
</div>
</div>


);

}