import {dataContainer} from "./index.js";


const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const weatherDescription = document.querySelector('.weather-description');

const city = document.querySelector('.city');

city.addEventListener("change", e =>
 getWeather(dataContainer.data, dataContainer.data.currentLanguage, e.target.value));


export async function getWeather(data1, language, cityValue = null) {
  if (cityValue == null) {
    city.value = data1.dataJson.setting[language].cityValue;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=83b4723393f25e2c076e5558fa794a27&units=metric`;
  let data;

  try {
    let res = await fetch(url);
    data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    let windText = Math.round(data.wind.speed);
    let windSpeed = data1.dataJson.setting[language].wind;
    wind.textContent = `${windSpeed} ${windText}`;
    let textTemperature = Math.round(data.main.temp);
    temperature.textContent = `${textTemperature} °C`;
    weatherDescription.textContent = data.weather[0].description;
  } catch{
    temperature.textContent = 'Error';
    wind.textContent = '';
    weatherDescription.textContent = '';
    weatherIcon.className = '';
  }
}


function setLocalStorage() {
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}
window.addEventListener('load', getLocalStorage);
