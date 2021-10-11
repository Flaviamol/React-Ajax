import axios from "axios";
import React, { useState } from "react";

const apiKey = "49d65f3e3cd6a2a73473bcfc10a0a319";
const units = "metric";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showTemperature);

  if (temperature) {
    return (
      <div>
        <h1>
          The temperature in {props.city} is {temperature}°C
        </h1>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
