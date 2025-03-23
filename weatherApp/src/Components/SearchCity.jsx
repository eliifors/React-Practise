import React, { useState } from "react";
import axios from "axios";
import "./SearchCity.css";

function SearchCity({ setSearchCity }) {
  const [city, setCity] = useState("");

  const handleChange = async () => {
    if (!city.trim()) {
      alert("Lütfen bir şehir adı giriniz!");
      return;
    }

    const apiKey = "f7ea5f2b6b92efa498e1ea527c7ffb94";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

    try {
      const response = await axios.get(url);
      setSearchCity(response.data);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          alert("Şehir bulunamadı! Lütfen geçerli bir şehir adı giriniz.");
        } else {
          alert(
            `API Hatası: ${error.response.status} - ${error.response.data.message}`
          );
        }
      } else if (error.request) {
        alert(
          "Sunucuya ulaşılamıyor. Lütfen internet bağlantınızı kontrol edin."
        );
      } else {
        alert("Bilinmeyen bir hata oluştu.");
      }
      console.error("API Hatası:", error);
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
