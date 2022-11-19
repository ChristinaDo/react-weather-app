import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day text-uppercase">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={25} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max">{maxTemperature()}</span>
        <span className="WeatherForecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
