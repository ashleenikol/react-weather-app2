import React from "react";

export default function Weather() {
  return (
    <div className="container">
      <div className="form">
        <form className="search-engine">
          <input
            type="text"
            className="search-input"
            placeholder="Enter City"
          />
          <button>Search</button>
        </form>
      </div>
      <div className="city-weather">
        <h1 className="city">Tompkinsville</h1>
        <h2 id="date-time">Thursday, 12:00PM</h2>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="sunny"
              width="100"
            />
            Cloudy
            <h2 id="temp"> 15°F</h2>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity"></span>12%
              </li>
              <li>
                Wind: <span id="wind"></span>5mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
