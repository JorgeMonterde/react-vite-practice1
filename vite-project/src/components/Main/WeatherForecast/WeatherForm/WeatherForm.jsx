import React, { useState, useEffect } from "react";
const apiKey = import.meta.env.VITE_API_KEY;


const WeatherForm = (props) => {
  const [city, setCity] = useState("");
  const {weatherState, setWeatherState} = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCity = event.target.city.value;
    // update "weatherForm" state with city
    setCity(newCity);
  };

  useEffect(() => {
    //it will execute when second parameter updates ---> ["sv","kjwef","eygw"...]
    //use "[]" (empty array) to execute the useEffect just once

    if(city){ //Weather info (by search form);
      
      const weatherInfo = async(searchCity="madrid", countryCode="ES") => {
        // get "lat" and "lon" from a city name:
        const coordData = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchCity},${countryCode}&appid=${apiKey}`);
        const coordResponse = await coordData.json();
        const lat = coordResponse[0].lat;
        const lon = coordResponse[0].lon;

        // get weather info from "lat" and "lon":
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const weatherResponse = await weatherData.json();
  
        console.log(weatherResponse);
        setWeatherState({"city":weatherResponse.city.name, "weatherData": weatherResponse});
        
      };

      weatherInfo(city);
    } else { //Weather info (by geolocation);
      const weatherInfo = async() => {
        navigator.geolocation.getCurrentPosition(async(pos) => {
          const crd = pos.coords;
          console.log(`Latitude : ${crd.latitude}`);
          console.log(`Longitude: ${crd.longitude}`);
          let lat = crd.latitude;
          let lon = crd.longitude;

          // get weather info from "lat" and "lon":
          const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
          const weatherResponse = await weatherData.json();
    
          console.log(weatherResponse);
          setWeatherState({"city":weatherResponse.city.name, "weatherData": weatherResponse});

        });
      };
      weatherInfo(city);
    }
  }, [city, setWeatherState])

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" id="city" placeholder="City"/>
        <input type="submit" value="Send city" />
      </form>
    </section>
  );
};

export default WeatherForm;
