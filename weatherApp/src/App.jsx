import "./App.css";
import { useState } from "react";
import SearchCity from "./Components/SearchCity";
import WeatherWindow from "./Components/WeatherWindow";
import WeatherBox from "./Components/WeatherBox";

function App() {
  const [searchCity, setSearchCity] = useState([]);
  return (
    <div className="App">
      <SearchCity searchCity={searchCity} setSearchCity={setSearchCity} />
      <WeatherWindow searchCity={searchCity} setSearchCity={setSearchCity} />
      <WeatherBox />
    </div>
  );
}

export default App;
