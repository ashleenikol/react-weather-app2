import React from "react";
import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tompkinsville" />
      <footer>
        This project was coded by Ashlee Bartley and is{" "}
        <a
          href="https://github.com/ashleenikol/react-weather-app2"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
