//this is my src\components\Footer\Footer.jsx file
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Added social media icons

const Footer = () => {
  return (
    <div
      style={{
        background: "#4B5563",
        color: "zinc",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Copyright Section */}
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            margin: "0",
            whiteSpace: "nowrap",
          }}
        >
          &copy; 2024, made by Saurabh Mishra
        </h2>

        {/* Social Media Icons Section */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "10px",
            justifyContent: "center",
          }}
        >
          

          {/* LinkedIn Icon */}
          <a
            href="https://in.linkedin.com/in/saurabhmishra1077"
            style={{
              fontSize: "24px",
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s, transform 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#0077b5";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
            }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/saurabhmishra1077/"
            style={{
              fontSize: "24px",
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s, transform 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#ec4899";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
            }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer Divider */}
      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid #6b7280",
          paddingTop: "10px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "14px", opacity: "0.8", margin: "0" }}>
          Designed with love &amp; passion for the web. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
