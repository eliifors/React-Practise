import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./SearchCity.css";

function SearchCity({ searchCity, setSearchCity }) {
  const [city, setCity] = useState("");

  const handleChange = async () => {
    if (!city.trim()) {
      alert("Lütfen bir şehir adı giriniz!");
    }

    const apiKey = "f7ea5f2b6b92efa498e1ea527c7ffb94";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

    try {
      const response = await axios.get(url);
      setSearchCity(response.data);
    } catch (error) {
      console.error("API Hatası:", error);
      alert("Şehir bulunamadı veya API hatası oluştu!");
    }
  };

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Weather App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChange();
        }}
      >
        <div className="form">
          <input
            value={city}
            className="input"
            placeholder="Şehir Giriniz..."
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="btn-submit">
            Ara
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchCity;
