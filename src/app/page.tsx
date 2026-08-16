"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import { WeatherResponse } from "../types/weather";

export default function Home() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  const handleSearch = async (city: string) => {
    try {
      const response = await fetch(
        `/api/weather?city=${encodeURIComponent(city)}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data: WeatherResponse = await response.json();

      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <div className="dashboard">
        <div className="dashboard-title">
          <h1>Weather Dashboard</h1>
          <p>Check the current weather in any city</p>
        </div>

        <SearchBar onSearch={handleSearch} />

        {weather && <CurrentWeather weather={weather} />}
      </div>
    </main>
  );
}
