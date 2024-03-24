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
        variant={selectedCity === "" ? "light" : "outline-light"}
        onClick={getCurrentLocation}
      >
        My City
      </Button>
      {cityList.map((item) => (
        <Button
          variant={selectedCity === item ? "light" : "outline-light"}
          onClick={() => setSelectedCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
