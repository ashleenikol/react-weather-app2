import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <WeatherIcon code={props.data.iconUrl} size={52} />

            <div className="float-left">
              <WeatherTemperature fahrenheit={props.data.temperature} />
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
    </div>
  );
}
