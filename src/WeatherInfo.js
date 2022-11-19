import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  const images = {
    humidity: require("./images/humidity.png"),
    windVane: require("./images/wind-vane.png"),
  };
  return (
    <div className="WeatherInfo">
      <WeatherIcon
        code={props.data.icon}
        alt={props.data.description}
        size={90}
      />
      <div className="WeatherData">
        <h1 className="text-uppercase">{props.data.city}</h1>
        <p className="date">
          <FormattedDate date={props.data.date} />
        </p>
        <WeatherTemperature celsius={props.data.temperature} />
        <p className="WeatherDescription">
          <span className="text-capitalize">{props.data.description}</span> |{" "}
          <img className="humidity" src={images.humidity} alt="" />{" "}
          {props.data.humidity}% |{" "}
          <img className="windspeed" src={images.windVane} alt="" />{" "}
          {Math.round(props.data.wind)} km/h
        </p>
      </div>
    </div>
  );
}
