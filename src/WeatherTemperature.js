import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h2>
          {Math.round(props.celsius)}{" "}
          <span className="unit">
            °C |{" "}
            <a className="conversion" href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <h2>
          {Math.round(fahrenheit)}{" "}
          <span className="unit">
            <a className="conversion" href="/" onClick={showCelsius}>
              °C{" "}
            </a>
            | °F
          </span>
        </h2>
      </div>
    );
  }
}
