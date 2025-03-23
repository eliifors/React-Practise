import React from "react";

function WeatherWindow({ searchCity }) {
  if (!searchCity || !searchCity.main) {
    return <p>Şehir bilgisi bulunamadı.</p>;
  }

  return (
    <div className="main-weather">
      <p>{searchCity.name}</p>
      <div>
        <p className="temp">{searchCity.main.temp}°C</p>
        <p>Feels like : {searchCity.main.feels_like}°C </p>
      </div>
    </div>
  );
}

export default WeatherWindow;
