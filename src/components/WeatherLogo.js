import React, { useState } from "react";
import Weather from "../assets/weather-logo.png";
import WeatherChange from "../assets/weather-logo2.png";
import Logo from "./Logo.css";

export default function WeatherLogo() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <img
        src={isHovered ? WeatherChange : Weather}
        alt="image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}
