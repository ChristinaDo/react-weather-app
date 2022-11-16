import React from "react";
import FormattedDate from "./FormattedDate";
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
        <li className="text-capitalize">{props.data.description}</li>
        <li>{props.data.humidity}%</li>
        <li>{Math.round(props.data.wind)} km/h</li>
      </ul>
      <Forecast />
    </div>
  );
}
