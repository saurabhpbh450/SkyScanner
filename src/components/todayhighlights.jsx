//this is my src\components\todayhighlights.jsx file

import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import HighlightBox from "../../src/components/Highlightbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompressIcon from "@mui/icons-material/Compress";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const TodayHighlights = ({ weatherData, airQualityData }) => {
  const { main, wind, visibility, sys } = weatherData;
  const airQualityIndex = airQualityData?.main?.aqi;
  const { co, no, no2, o3 } = airQualityData?.components || {};

  const renderAirQualityDescription = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Unknown";
    }
  };

  const highlights = [
    { title: "Humidity", value: `${main.humidity}%`, Icon: InvertColorsIcon },
    {
      title: "Pressure",
      value: `${main.pressure} hPa`,
      Icon: CompressIcon,
    },
    {
      title: "Visibility",
      value: `${visibility / 1000} km`,
      Icon: VisibilityIcon,
    },
    {
      title: "Feels Like",
      value: `${main.feels_like}°C`,
      Icon: DeviceThermostatIcon,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#1F2937",
        color: "#F9FAFB",
        width: "100%",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      {/* Title */}
      <div style={{ fontSize: "24px", marginBottom: "15px" }}>
        Today's Highlights
      </div>

      {/* Air Quality and Sunrise/Sunset */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Air Quality Index Section */}
        <div
          style={{
            backgroundColor: "#374151",
            borderRadius: "10px",
            padding: "20px",
            flex: "1",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "20px" }}>Air Quality Index</p>
            <div
              style={{
                padding: "5px 10px",
                backgroundColor: "green",
                borderRadius: "5px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {renderAirQualityDescription(airQualityIndex)}
            </div>
          </div>
          <AirIcon style={{ fontSize: "40px", margin: "15px 0" }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "15px",
            }}
          >
            <div>
              <p style={{ fontWeight: "bold" }}>CO</p>
              <p>{co} µg/m³</p>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>NO</p>
              <p>{no} µg/m³</p>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>NO₂</p>
              <p>{no2} µg/m³</p>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>O₃</p>
              <p>{o3} µg/m³</p>
            </div>
          </div>
        </div>

        {/* Sunrise/Sunset Section */}
        <div
          style={{
            backgroundColor: "#374151",
            borderRadius: "10px",
            padding: "20px",
            flex: "1",
          }}
        >
          <p style={{ fontSize: "20px", marginBottom: "10px" }}>
            Sunrise & Sunset
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <WbSunnyIcon style={{ fontSize: "50px" }} />
              <p>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
            </div>
            <div>
              <NightsStayIcon style={{ fontSize: "50px" }} />
              <p>{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight Boxes */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {highlights.map((highlight, index) => (
          <HighlightBox
            key={index}
            title={highlight.title}
            value={highlight.value}
            Icon={highlight.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default TodayHighlights;

