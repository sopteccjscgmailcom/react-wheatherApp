import { useState } from "react";
import { celsiusToFahrenheit, kelvinToCelsius } from "../utils/tem";

const Weather = ({ weatherInfo }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const handleChangeTemp = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <section className="text-center grid gap-6">
      <h2 className="font-bold text-2xl">
        {weatherInfo?.data.name},{weatherInfo?.data.sys.country}
      </h2>
      <section className="grid gap-4 sm:grid-cols-[1fr_auto]">
        {/* Seccion de arriba titulo los grados y la imagen*/}
        <article className="bg-white/70 p-2 rounded-3xl grid grid-cols-2 items-center">
          <h3 className="col-span-2 capitalize">
            {weatherInfo?.data.weather[0].description}
          </h3>
          <span className="text-4xl">
            {isCelsius
              ? kelvinToCelsius(weatherInfo?.data.main.temp)
              : celsiusToFahrenheit(weatherInfo?.data.main.temp)}
          </span>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo?.data.weather[0].icon}@2x.png`}
              alt="error"
            />
          </div>
        </article>

        {/*Seccion de abajo pero va a estar al costado SOLO EN PC*/}
        <section className="bg-white/70 p-4 rounded-3xl py-6 grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center">
          <article className="flex gap-2 sm:items-center">
            <div>
              <img src="/images/air.png" alt="" />
            </div>
            <span>{weatherInfo?.data.wind.speed}m/s</span>
          </article>
          <article className="flex gap-2 sm:items-center">
            <div>
              <img src="/images/humidity.png" alt="" />
            </div>
            <span>{weatherInfo?.data.main.humidity}%</span>
          </article>
          <article className="flex gap-2 sm:items-center">
            <div>
              <img src="/images/heat.png" alt="" />
            </div>
            <span>{weatherInfo?.data.main.pressure}hPa</span>
          </article>
        </section>
      </section>
      <button onClick={handleChangeTemp}>Change F/C</button>
    </section>
  );
};
export default Weather;
