import React from "react";
import "./WeatherWindow.css";

function WeatherWindow({ searchCity }) {
  if (!searchCity || !searchCity.main || !searchCity.weather) {
    return <p>Şehir bilgisi bulunamadı. Lütfen bir şehir arayın.</p>;
  }

  return (
    <div className="main-weather">
      <p>Today</p>
      <h2>{searchCity.name}</h2>
      <div>
        <p className="temp">{searchCity.main.temp}°C</p>
        <p>Hissedilen: {searchCity.main.feels_like}°C</p>
        <p>Hava Durumu: {searchCity.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherWindow;
