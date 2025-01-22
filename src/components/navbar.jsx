//this is my src\components\navbar.jsx file

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterDramaTwoToneIcon from "@mui/icons-material/FilterDramaTwoTone";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

const Navbar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleSearchClick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
    }
  };

  return (
    <nav
      style={{
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#1E293B",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        flexWrap: "wrap", // Added to allow items to wrap on small screens
      }}
    >
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: "1" }}>
        <FilterDramaTwoToneIcon style={{ color: "#38BDF8", fontSize: "32px" }} />
        <p style={{ fontWeight: "bold", fontSize: "22px", color: "#F1F5F9" }}>SkyScanner</p>
      </div>

      {/* Search Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: "2", justifyContent: "center", marginTop: "10px" }}>
        <TextField
          variant="outlined"
          placeholder="Search city (e.g., 'New Delhi')"
          size="small"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            width: "100%",  // Ensure it takes full width of available space
            maxWidth: "300px", // Limit to 300px on larger screens
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearchClick}
          style={{
            borderRadius: "8px",
            backgroundColor: "#38BDF8",
            color: "#1E293B",
            fontWeight: "bold",
          }}
        >
          Search
        </Button>
      </div>

      {/* Current Location Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 16px",
          backgroundColor: "#38BDF8",
          borderRadius: "8px",
          color: "#1E293B",
          fontWeight: "bold",
          cursor: "pointer",
          marginTop: "10px",
          width: "100%",  // Make it take full width on small screens
          maxWidth: "180px",  // Limit to max 180px on larger screens
        }}
      >
        <GpsFixedIcon style={{ marginRight: "8px" }} />
        Current Location
      </div>
    </nav>
  );
};

export default Navbar;

