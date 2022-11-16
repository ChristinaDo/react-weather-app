import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            className="searchField"
            type="text"
            placeholder="Enter a city..."
            autocomplete="off"
          />
          <input className="searchButton" type="submit" value="Search" />
        </form>
        <h1>{weatherData.city}</h1>
        <p>
          <FormattedDate date={weatherData.date} />
        </p>
        <h2>{Math.round(weatherData.temperature)}°C</h2>
        <ul>
          <li className="text-capitalize">{weatherData.description}</li>
          <li>{weatherData.humidity}%</li>
          <li>{Math.round(weatherData.wind)} km/h</li>
        </ul>
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "ae243fbc2119a2o30cd00e9et7ff3edf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
