import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherLogo from "./components/WeatherLogo";

function App() {
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
        <WeatherLogo></WeatherLogo>
      </div>
      <div>
        <SearchBar></SearchBar>
      </div>
    </>
  );
}

export default App;
