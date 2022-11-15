import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather() {
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
