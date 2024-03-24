import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({
  cityList,
  selectedCity,
  setSelectedCity,
  getCurrentLocation,
}) => {
  return (
    <div className="WeatherButton">
      <Button
        variant={selectedCity === "" ? "dark" : "light"}
        onClick={getCurrentLocation}
      >
        My City
      </Button>
      {cityList.map((item) => (
        <Button
          variant={selectedCity === item ? "dark" : "light"}
          onClick={() => setSelectedCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
