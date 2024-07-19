export const GetWeatherDataOfCity = async (cityName) =>{
    const Response = await fetch(`http://api.weatherapi.com/v1/current.json?key= 5807d24e4424401ead763714242306 &q=${cityName}&aqi=yes`)
    return  await Response.json();
}
export const GetWeatherDataOfLocation = async (lat, lon) =>{
    const Response = await fetch(`http://api.weatherapi.com/v1/current.json?key= 5807d24e4424401ead763714242306 &q=${lat},${lon}&aqi=yes`)
    return  await Response.json();
}