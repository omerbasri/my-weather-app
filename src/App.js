import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherLogo from "./components/WeatherLogo";
import SwitchButton from "./components/SwitchButton";
import { currentSwitchValue } from "./components/SwitchButton";

function App() {
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

export default App;
