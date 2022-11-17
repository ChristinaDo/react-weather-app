import React from "react";
import FormattedDate from "./FormattedDate";
import images from "./images";
import "./Weather.css";
import Forecast from "./Forecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <h2>{Math.round(props.data.temperature)}°C</h2>

      <ul>
        <li className="text-capitalize">
          <img className="weatherIcon" src={images.brokenCloudsDay} alt="" />{" "}
          {props.data.description}
        </li>
        <li>
          <img className="weatherIcon" src={images.humidity} alt="" />{" "}
          {props.data.humidity}%
        </li>
        <li>
          <img className="weatherIcon" src={images.windVane} alt="" />{" "}
          {Math.round(props.data.wind)} km/h
        </li>
      </ul>
      <Forecast />
    </div>
  );
}
