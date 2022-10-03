import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import App from "./App.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="container">
        <div className="form">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Enter a City"
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="city-weather">
          <h1 className="city">{weatherData.city}</h1>
          <h2 className="date-time">
            <FormattedDate date={weatherData.date} />
          </h2>
          <h2 className="description text-capitalize">
            {weatherData.description}
          </h2>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  width="100"
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">°F</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}</li>
                <li>Wind: {Math.round(weatherData.wind)} mph</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="forecast">
          <div className="row">
            <div className="col-2">
              <div className="weather-forecast-date">Thu</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              />
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">18°</span>
                <span className="weather-forecast-temperature-min">12°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "95f4246d3ed416a00b60d11bef81aa4f";
    let city = "Tompkinsville";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
