import axios from "axios";
import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";

export const App = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const sucess = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "cb3b82a5e4ce386aa2a740f0c289e376";
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    axios
      .get(URL)
      .then(({ data }) => setWeatherInfo({ data }))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(sucess);
  }, []);

  return (
    <main className="bg-black min-h-screen text-white flex justify-center items-center p-2">
      <Weather weatherInfo={weatherInfo} />
    </main>
  );
};
