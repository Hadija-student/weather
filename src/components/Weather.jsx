import React, { useState } from "react";
import styles from "../styles/Weather.module.css";

const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [Weather, setWeather] = useState(null);
  const api = "5f24b65c3be823f41c65f8c785f5b498";

  const handleClick = () => {
    getWeather();
    setCityName("");
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
    // setCityName("");
  };

  async function getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=metric&lang=ru`,
    );
    const data = await response.json();
    setWeather(data);
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.h1}>Аба ырайы</h1>
      <div className={styles.main}>
        <input
          type="text"
          placeholder={"Шаарды жаз...."}
          onChange={handleChange}
          value={cityName}
        />
        <button onClick={handleClick}>Издөө</button>
      </div>

      <div className={styles.weather}>
        <h1>{Weather?.name}</h1>
        <h2>{Weather?.main?.temp}°C</h2>
        <h2>{Weather?.weather?.[0]?.description}</h2>
      </div>
    </div>
  );
};

export default Weather;
