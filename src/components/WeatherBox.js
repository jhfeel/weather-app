import React from "react";

const WeatherBox = ({ weather }) => {
  return (
    <div className="WeatherBox">
      <div>{weather?.name}</div>
      <div>
        <span>{Math.round(weather?.main.temp)}℃</span>
        <span>{Math.round(weather?.main.temp * 1.8 + 32)}℉</span>
      </div>
      <div>{weather?.weather[0].description}</div>
    </div>
  );
};

export default WeatherBox;
