import React from "react";
import Weather from "../assets/weather-logo.jpg";
import Logo from "./Logo.css";

export default function WeatherLogo() {
  return (
    <div>
      <img className="logo" src={Weather} />
    </div>
  );
}
