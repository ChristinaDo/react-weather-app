import React from "react";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "clear-sky-day": require("./images/clear-sky-day.png"),
    "clear-sky-night": require("./images/clear-sky-night.png"),
    "broken-clouds-day": require("./images/broken-clouds-day.png"),
    "broken-clouds-night": require("./images/broken-clouds-night.png"),
    "few-clouds-day": require("./images/few-clouds-day.png"),
    "few-clouds-night": require("./images/few-clouds-night.png"),
    "mist-day": require("./images/mist-day.png"),
    "mist-night": require("./images/mist-night.png"),
    "rain-day": require("./images/rain-day.png"),
    "rain-night": require("./images/rain-night.png"),
    "scattered-clouds-day": require("./images/scattered-clouds-day.png"),
    "scattered-clouds-night": require("./images/scattered-clouds-night.png"),
    "shower-rain-day": require("./images/shower-rain-day.png"),
    "shower-rain-night": require("./images/shower-rain-night.png"),
    "snow-day": require("./images/snow-day.png"),
    "snow-night": require("./images/snow-night.png"),
    "thunderstorm-day": require("./images/thunderstorm-day.png"),
    "thunderstorm-night": require("./images/thunderstorm-night.png"),
  };
  return (
    <img
      className="weatherIcon"
      src={codeMapping[props.code]}
      alt={props.alt}
    />
  );
}
