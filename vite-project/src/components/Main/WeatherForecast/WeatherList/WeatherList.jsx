import React, { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import WeatherCard from "./WeatherCard/WeatherCard"; 

const WeatherList = (props) => {
  const { weatherState } = props;
  

  function firstLetterToUppercase(str){
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(str2);
    return str2;
  }
  const city = firstLetterToUppercase(weatherState.city);



  let dates = [];
  let forecastsFiltered = {};

  if (weatherState.weatherData.list){
    // get only the different dates
    let weatherInfo = weatherState.weatherData.list;
    
    for(let i=0; i<weatherInfo.length; i++){
      let fullDate = new Date(weatherInfo[i].dt * 1000);     

      if(forecastsFiltered[fullDate.toDateString()]){
        forecastsFiltered[fullDate.toDateString()].push(weatherInfo[i]);
      } else {
        dates.push(fullDate.toDateString());
        forecastsFiltered[fullDate.toDateString()] = [];
      }
    }

    console.log("dates: ",dates, "===>", forecastsFiltered)
  }


  const printCards = () => dates.map(date => {
    let key = uuidv4();
    return <WeatherCard key={key} date={date} forecastInfo={forecastsFiltered[date]} />
  });


  return (
  <section>
    <p>Weather forecasts for the next few days in {city}:</p>
    <ul>
      {printCards()}
    </ul>
  </section>
  );

};

export default WeatherList;
