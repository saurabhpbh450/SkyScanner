//this is my src\App.jsx file

import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import MainWeatherCard from "./components/mainweathercard";
import FiveDayForecast from "./components/fiveday";
import TodayHighlights from "./components/todayhighlights";
import axios from "axios";
import Footer from "./components/Footer";

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New Delhi"); // Default city is New Delhi
  const [airQualityData, setAirQualityData] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchAirQualityData = (lat, lon) => {
    const API_KEY = // your openweather.com API key;
    axios
      .get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then((response) => setAirQualityData(response.data.list[0]))
      .catch((error) => console.error("Error fetching air quality data:", error));
  };

  const fetchWeatherData = (city) => {
    const API_KEY = // your openweather.com API key;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        fetchAirQualityData(data.coord.lat, data.coord.lon);
        axios
          .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
          .then((response) => setFiveDayForecast(response.data))
          .catch((error) => console.error("Error fetching 5-day forecast:", error));
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  };

  const handleSearch = (searchedCity) => setCity(searchedCity);

  return (
    <div style={{ backgroundColor: "grey", minHeight: "100vh", padding: "20px" }}>
      <Navbar onSearch={handleSearch} />
      {weatherData && airQualityData && (
        <div style={{ display: "flex", padding: "30px", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ flex: "1", marginRight: "10px" }}>
            <MainWeatherCard weatherData={weatherData} />
            <p style={{ fontWeight: "700", fontSize: "20px", marginTop: "20px" }}>5 Days Forecast</p>
            {fiveDayForecast && <FiveDayForecast forecastData={fiveDayForecast} />}
          </div>
          <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "20px" }}>
            <TodayHighlights weatherData={weatherData} airQualityData={airQualityData} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default WeatherDashboard;
