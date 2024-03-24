import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import { ClipLoader } from "react-spinners";

function App() {
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cityList = ["New York", "Paris", "Barcelona", "Tokyo", "Seoul"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    setSelectedCity("");
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cf1f1f888598982609a1050510d8d95c&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=cf1f1f888598982609a1050510d8d95c&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (selectedCity === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [selectedCity]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#ffffff" loading={loading} />
        </div>
      ) : (
        <div className="container">
          {weather ? (
            <WeatherBox weather={weather} />
          ) : (
            "위치 액세스를 허용해주세요"
          )}
          <WeatherButton
            cityList={cityList}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            getCurrentLocation={getCurrentLocation}
          />
        </div>
      )}
    </div>
  );
}

export default App;
