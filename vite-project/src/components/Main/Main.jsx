import React from "react";
import { Routes, Route } from "react-router-dom";
import ToDo from "./ToDo/ToDo";
import Home from "./Home/Home";
import WeatherForecast from "./WeatherForecast/WeatherForecast";


const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/weather" element={<WeatherForecast />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
