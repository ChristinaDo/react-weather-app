import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function showForecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col-2">
          <p>Fri</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloud"
            className="forecast-img"
          />
          <p>
            <span className="forecastHigh">19°C</span> 10°C
          </p>
        </div>
        <div className="col-2">
          <p>Sat</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloud"
            className="forecast-img"
          />
          <p>
            <span className="forecastHigh">21°C</span> 13°C
          </p>
        </div>
        <div className="col-2">
          <p>Sun</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloud"
            className="forecast-img"
          />
          <p>
            <span className="forecastHigh">20°C</span> 10°C
          </p>
        </div>
        <div className="col-2">
          <p>Mon</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloud"
            className="forecast-img"
          />
          <p>
            <span className="forecastHigh">19°C</span> 12°C
          </p>
        </div>
        <div className="col-2">
          <p>Tue</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloud"
            className="forecast-img"
          />
          <p>
            <span className="forecastHigh">18°C</span> 9°C
          </p>
        </div>
      </div>
    </div>
  );
}
