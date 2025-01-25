// this is my src\components\fiveday.jsx file

import React from "react";

const FiveDayForecast = ({ forecastData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
    }).format(date);
  };

  // Extract one weather record per day
  const getUniqueDays = (list) => {
    const uniqueDays = {};
    list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0]; // Extract the date part (YYYY-MM-DD)
      if (!uniqueDays[date]) {
        uniqueDays[date] = item; // Store only one record per day
      }
    });
    return Object.values(uniqueDays);
  };

  const uniqueForecastData = getUniqueDays(forecastData.list);

  return (
    <div
      style={{
        backgroundColor: "#4B5563",
        color: "white",
        borderRadius: "0.5rem",
        width: "200px",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "15px",
        paddingBottom: "5px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Added shadow for depth
      }}
    >
      {uniqueForecastData.slice(0, 5).map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              {Math.round(item.main.temp)}°C
            </div>
          </div>
          <div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              {formatDate(item.dt_txt)}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "15px" }}>{item.weather[0].description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FiveDayForecast;
