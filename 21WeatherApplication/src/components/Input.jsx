import React from 'react'
import { useWeather } from "../context/WeatherContext";

function Input() {
    const weather = useWeather();
    console.log(weather)
  return (
    <div>
        <input 
        className='input-field'
        placeholder='Search city here'
        value={weather.searchCity}
        onChange={(e) => weather.SetSearchCity(e.target.value)}
        />
    </div>
  )
}

export default Input