import './App.css'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import { useWeather} from "./context/WeatherContext"
import { useEffect } from 'react'


function App() {
  const weather = useWeather();
  console.log(weather)

  useEffect(()=>{
    // Get current Location
    weather.fetchCurrentLocation()
  },[])
  return (
    <>
      <div className='main_container'>
      <h1>Weather Application</h1>
      <div style={{display:"flex", justifyContent:"center"}}>
      <Input/>
      <Button onClick = {weather.fetchData} value='Search' />
      </div>
      <Card/>
      </div>
    </>
  )
}

export default App
