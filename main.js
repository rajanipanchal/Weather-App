 
 const API_KEY = 'c41d303f39d74fb19d845231231301'

 const form = document.querySelector("form")
 const input =  document.querySelector("input")
 const h3 = document.querySelector("h3")
 const p = document.querySelector("p")
 const h4 = document.querySelector("h4")
 const image =  document.querySelector("img")
 const body = document.querySelector("body")
const h6 = document.querySelector("h6")
const button = document.querySelector("button")

async function getWeather(e){
    e.preventDefault()
 try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input.value}&aqi=yes`)
const data = await response.json()
const cityName = data.location.name
const DateTime = data.location.localtime
const Temperature = data.current.temp_c +"°C"
const imageUrl = "https:"+data.current.condition.icon
const weather = data.current.condition.text
h3.innerText= cityName
p.innerText = DateTime
h4.innerText = Temperature
h6.innerText = weather
image.setAttribute = ("src", imageUrl)
// console.log(imageUrl)
// image.setAttribute = imageUrl

 }catch(error){
window.alert ("Out Of World")
 }

form.reset()
}

 form.addEventListener("submit", getWeather)