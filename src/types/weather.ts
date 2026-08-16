export interface WeatherResponse {
  name: string;

  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };

  weather: {
    description: string;
    icon: string;
  }[];

  wind: {
    speed: number;
  };
}
