import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import {GetWeatherDataOfCity, GetWeatherDataOfLocation} from "../api/WeatherApi"

const WeatherDataContext = createContext(null)

 export const useWeather = () => {
    return useContext(WeatherDataContext)
}

export const WeatherProvider = (props) => {
    const[data, setData] = useState()
    const[searchCity, SetSearchCity] = useState()

    const fetchData = async () => {
        const response = await GetWeatherDataOfCity(searchCity)
        setData(response)
    }


    // getting current location of user that is latitude, longitude
    const fetchCurrentLocation = () =>{
        navigator.geolocation.getCurrentPosition((position) => {
            GetWeatherDataOfLocation(
                position.coords.latitude, 
                position.coords.longitude
            ).then((data) => setData(data))
            
        })
    }

    return(
        <WeatherDataContext.Provider value={{
            SetSearchCity,
            searchCity, 
            data, 
            fetchData, 
            fetchCurrentLocation
            }}>
            {props.children}
        </WeatherDataContext.Provider>
    )
}   