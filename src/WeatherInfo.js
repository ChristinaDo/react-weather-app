import React from "react";
import FormattedDate from "./FormattedDate";
import images from "./images";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <WeatherIcon code={props.data.icon} alt={props.data.description} />
      <div className="WeatherData">
        <h1 className="text-uppercase">{props.data.city}</h1>
        <p>
          <FormattedDate date={props.data.date} />
        </p>
        <WeatherTemperature celsius={props.data.temperature} />
        <p>
          <span className="text-capitalize">{props.data.description}</span> |{" "}
          <img className="humidity" src={images.humidity} alt="" />{" "}
          {props.data.humidity}% |{" "}
          <img className="windspeed" src={images.windVane} alt="" />{" "}
          {Math.round(props.data.wind)} km/h
        </p>
      </div>
      <div className="Forecast">
        <Forecast />
      </div>
    </div>
  );
}
