import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div className="WeatherButton">
      <Button variant="light">My City</Button>
      <Button variant="light">Seoul</Button>
      <Button variant="light">Tokyo</Button>
      <Button variant="light">New York</Button>
      <Button variant="light">Barcelona</Button>
    </div>
  );
};

export default WeatherButton;
