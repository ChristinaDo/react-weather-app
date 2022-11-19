import React from "react";
import images from "./images";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "clearSkyDay",
    "clear-sky-night": "clearSkyNight",
    "broken-clouds-day": "brokenCloudsDay",
    "broken-clouds-night": "brokenCloudsNight",
    "few-clouds-day": "fewCloudsDay",
    "few-clouds-night": "fewCloudsNight",
    "mist-day": "mistDay",
    "mist-night": "mistNight",
    "rain-day": "rainDay",
    "rain-night": "rainNight",
    "scattered-clouds-day": "scatteredCloudsDay",
    "scattered-clouds-night": "scatteredCloudsNight",
    "shower-rain-day": "showerRainDay",
    "shower-rain-night": "showerRainNight",
    "snow-day": "snowDay",
    "snow-night": "snowNight",
    "thunderstorm-day": "thunderstormDay",
    "thunderstorm-night": "thunderstormNight",
  };
  return (
    <img
      className="weatherIcon"
      src={codeMapping[props.code]}
      alt={props.alt}
    />
  );
}
