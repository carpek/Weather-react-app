import React from 'react';
import axios from "axios";
import "./Weather.css";

export default function Weather () {
const apiKey="a8b18d5e574b14c1d3de44331ec7e970";
let city="Vienna";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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

<h1>Vienna</h1>
<ul>
<li>Sunday, 14:45</li>
<li>Cloudy</li>
</ul>
<div className="row mt-3">
<div className="col-6">
<div className="clearfix">
    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" 
    alt="cloudy"
    className="float-left" />
<span className="temperature">6</span> 
<span className="unit">°C</span>
</div>
</div>
<div className="col-6">
    <ul>
<li>
Precipitation: 72%
</li>
<li>
Humidity: 59%
</li>
<li>
Wind: 29 km/h
</li>

    </ul>
</div>
</div>

</div>

)

}