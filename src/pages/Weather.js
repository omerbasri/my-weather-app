import { useEffect, useState } from "react";

export default function Weather() {
  const [value, setValue] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const lat = "41.0082";
      const lon = "28.9784";
      const apiKey = "9204cb1d774e5871d1990d58a56ac9ea";
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Weather data could not be fetched.");
        } else {
          console.log(response);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, [value]);

  return (
    <>
      <h1>Weather PAGE</h1>
      <button onClick={() => setValue(!value)}>CLİCK!!</button>
    </>
  );
}
