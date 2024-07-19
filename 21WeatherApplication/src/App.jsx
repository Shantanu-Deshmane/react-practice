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
      <div>
      <h1>Weather Application</h1>
      <Input/>
      <Button onClick = {weather.fetchData} value='Search'/>
      <Card/>
      <Button value={'Refresh'}/>
      </div>
    </>
  )
}

export default App
