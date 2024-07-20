import React from 'react'
import { useWeather } from "../context/WeatherContext";


function Card() {
    const weather = useWeather();
    try {
        return (
            <div className='card-data' style={{display:weather.data ? "block" : "none"}}>
                <img src={weather.data?.current?.condition?.icon} alt="weatherCondition Image" />
                <h2>{weather.data?.current?.temp_c}°C</h2>
                <p>{weather.data?.location?.name}, {weather.data?.location.region}, {weather.data?.location.country} </p>
            </div>
          )
    } catch (error) {
        console.log("Error Occured : "+error)
        return (
            <p className='err'>{weather.data?.error?.message}</p>
    )}
}

export default Card 