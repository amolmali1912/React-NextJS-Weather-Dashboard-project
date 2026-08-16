"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
