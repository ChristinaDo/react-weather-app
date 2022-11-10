import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Forecast from "./Forecast";

export default function searchWeather() {
  return (
    <div className="App">
      <div className="weatherApp">
        <form>
          <input
            className="city"
            type="text"
            placeholder="Enter a city..."
            autocomplete="off"
          />
          <input className="search" type="submit" value="Search" />
        </form>
        <br />

        <div className="row">
          <div className="col-4">
            <h1>Vienna</h1>
            <p className="date description">
              Thursday, 10 November 2022 partly cloudy
            </p>
          </div>
          <div className="col-4">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloud"
              className="cloud"
            />
          </div>
          <div className="col-4">
            <h2>19°C</h2>

            <p>
              Humidity: 79%
              <br />
              Wind: 8 km/h
            </p>
          </div>
        </div>
        <Forecast />
      </div>

      <p className="reference">
        <a
          href="https://github.com/ChristinaDo/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Christina Doneus
      </p>
    </div>
  );
}
