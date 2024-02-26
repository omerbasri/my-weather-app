import Search from "./Search.css";
import React, { useState } from "react";
import Select from "react-select";

const cities = [
  "Ankara",
  "İstanbul",
  "İzmir",
  "Adana",
  "Bursa",
  "New Jersey",
  "New York",
  "New Manhattan",
];

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  console.log(filteredCities);

  return (
    <div className="search">
      <div>
        <input
          type="text"
          placeholder="Search for city or place. . ."
          required
          value={searchInput}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
