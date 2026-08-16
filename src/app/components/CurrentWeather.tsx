import { WeatherResponse } from "../../types/weather";

interface CurrentWeatherProps {
  weather: WeatherResponse;
}

export default function CurrentWeather({ weather }: CurrentWeatherProps) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>

      <p className="temperature">{Math.round(weather.main.temp)}°C</p>

      <p className="condition">{weather.weather[0].description}</p>

      <div className="weather-details">
        <div>
          <span>💧</span>
          <p>Humidity</p>
          <strong>{weather.main.humidity}%</strong>
        </div>

        <div>
          <span>💨</span>
          <p>Wind</p>
          <strong>{weather.wind.speed} m/s</strong>
        </div>

        <div>
          <span>🌡️</span>
          <p>Feels Like</p>
          <strong>{Math.round(weather.main.feels_like)}°C</strong>
        </div>
      </div>
    </div>
  );
}
