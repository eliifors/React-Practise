import React, { useState, useEffect } from "react";
import "./WeatherWindow.css";

// Tarih ve saat bileşeni
function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = currentDateTime.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
      <p>{formattedDate} </p>
      <p>{formattedTime}</p>
    </div>
  );
}

function WeatherWindow({ searchCity }) {
  if (!searchCity || !searchCity.main || !searchCity.weather) {
    return <p>Şehir bilgisi bulunamadı. Lütfen bir şehir arayın.</p>;
  }

  const iconCode = searchCity.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="main-weather">
      <CurrentDateTime />
      <h2>{searchCity.name} </h2>
      <img src={iconUrl} alt={searchCity.weather[0].description} />
      <p className="temp" style={{ fontSize: "25px" }}>
        {searchCity.main.temp}°C
      </p>
      <div className="description">
        <p>Hissedilen {searchCity.main.feels_like}°C</p>
        <p>Hava Durumu : {searchCity.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherWindow;
