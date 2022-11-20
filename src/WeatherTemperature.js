import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h2>
        {Math.round(props.celsius)} <span className="unit">°C</span>
      </h2>
    </div>
  );
}
