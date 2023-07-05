import React, { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm/WeatherForm";
import WeatherList from "./WeatherList/WeatherList";

const WeatherForecast = () => {
  const [weatherState, setWeatherState] = useState({
    "city": "",
    "weatherData": {}
  });



  return (
    <section>
      <h2>Weather forecast</h2>
      <WeatherForm weatherState={weatherState} setWeatherState={setWeatherState} />
      <WeatherList weatherState={weatherState}/>
    </section>
  );
};

export default WeatherForecast;
