import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-weather">
        <h1 className="city">{props.data.city}</h1>
        <h2 className="date-time">
          <FormattedDate date={props.data.date} />
        </h2>
        <h2 className="description text-capitalize">
          {props.data.description}
        </h2>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} />
              </div>

              <div className="float-left">
                <span className="temperature">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="unit">°F</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
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
}
