import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <footer>
        <p className="reference">
          <a
            href="https://github.com/ChristinaDo/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Christina Doneus
        </p>
      </footer>
    </div>
  );
}

export default App;
