import React, { useState } from 'react'
import './weather.css'

import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import search_icon from '../assets/search.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const weather = () => {
  let api_key = "79f7b3e86217de25ec608d66b2cb9eaa";

  const[page, setPage] = useState("weather");
  const[wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value === ""){
      return 0;
    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let responce = await fetch(url);
    let data = await responce.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    temprature[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;

    if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
      setWicon(clear_icon);
    }else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
      setWicon(cloud_icon);
    }else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
      setWicon(drizzle_icon);
    }else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
      setWicon(drizzle_icon);
    }else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
      setWicon(rain_icon);
    }else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
      setWicon(rain_icon);
    }else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
      setWicon(snow_icon);
    }else{
      setWicon(clear_icon);
    }
  }

  return (
    <>
      <div class="top-bar">
        <input type="text" class="cityInput" placeholder='Search'></input>
        <div class="search-icon" onClick={() => {search()}}>
          <img src={search_icon} alt="searc icon"></img>
        </div>
      </div>

      <div class="weather-image">
        <img src={wicon} alt="weather-icon"></img>
      </div>

      <div class="weather-temp">24</div>

      <div class="weather-location">London</div>

      <div class="data-container">
        <div class="element">
          <img src={humidity_icon} alt="" className="icon" />

          <div class="data">
            <div class="humidity-percent">64</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div class="element">
          <img src={wind_icon} alt="" className="icon" />

          <div class="data">
            <div class="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default weather