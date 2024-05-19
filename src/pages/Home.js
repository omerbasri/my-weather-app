import React from "react";
import "./Home.css";
import SearchBar from "../components/SearchBar";
import WeatherLogo from "../components/WeatherLogo";
import SwitchButton from "../components/SwitchButton";
import { currentSwitchValue } from "../components/SwitchButton";

export default function Home() {
  return (
    <>
      <div className={currentSwitchValue ? "App" : "activeApp"}>
        <SwitchButton className="switch" style=""></SwitchButton>
        <WeatherLogo></WeatherLogo>
      </div>
      <div>
        <SearchBar></SearchBar>
      </div>
    </>
  );
}
