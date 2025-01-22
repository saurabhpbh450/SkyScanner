// this is my src\components\Highlightbox.jsx file
import React from "react";

const HighlightBox = ({ title, value, Icon }) => {
  return (
    <div
      style={{
        backgroundColor: "#374151",
        color: "white",
        padding: "1rem",
        borderRadius: "0.5rem",
        width: "180px",
        height: "80px",
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Added shadow for depth
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ fontSize: "18px", fontWeight: '600' }}>{title}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Icon style={{ fontSize: "30px" }} />
        <p style={{ fontSize: "30px" }}>{value}</p>
      </div>
    </div>
  );
};

export default HighlightBox;
