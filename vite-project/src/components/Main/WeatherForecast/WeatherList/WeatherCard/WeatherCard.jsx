import React from "react";
import { v4 as uuidv4 } from 'uuid';

const WeatherCard = (props) => {
  let { date, forecastInfo } = props;
  console.log("HEY!", date, forecastInfo)
  
  const printHourForecast = () => forecastInfo.map(info => {
    let key = uuidv4();
    let fullDate = new Date(info.dt * 1000);
    let hour = fullDate.getHours();
    let minutes = `${fullDate.getMinutes()}0`;
    return (
    <div key={key} className="hour_forecast">
      <h5>{hour}:{minutes}</h5>
      <p>Sky: {info.weather[0].description}</p>
      <p>Temperature: {info.main.temp} K</p>
      <p>Tª sensation: {info.main.feels_like} K</p>
      <p>Humidity: {info.main.humidity}%</p>
    </div>
    )
  })


  return (
    <article className="weather_card">
      
      <h4>{date}</h4>
      <div className="day_card">
        {printHourForecast()}
      </div>
      

    </article>
  );
};

export default WeatherCard;
