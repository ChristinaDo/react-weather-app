import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import axios from "axios";
import Forecast from "./Forecast";

export default function Weather() {
  const apiKey = "ae243fbc2119a2o30cd00e9et7ff3edf";
  let city = "London";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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
      <h1>London</h1>
      <p>Wednesday, 20:25</p>
      <h2>6°C</h2>
      <ul>
        <li>sunny</li>
        <li>20%</li>
        <li>4 km/h</li>
      </ul>
      <Forecast />
    </div>
  );
}
