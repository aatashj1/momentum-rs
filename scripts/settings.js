let playerCheck = document.getElementById("player");
let weatherCheck = document.getElementById("weather");
let greetingCheck = document.getElementById("greeting");
let quotesCheck = document.getElementById("quotes");
let timeDateCheck = document.getElementById("time-date");
let todoCheck = document.getElementById("todo");
let time1 = document.getElementById("time");

let player = document.querySelector(".player");
let weather = document.querySelector(".weather");
let greeting = document.querySelector(".greeting-container");
let quotes = document.querySelector(".quotes-container");
let time = document.querySelector(".time");
let date = document.querySelector(".date");

playerCheck.addEventListener("change", changePlayer);
weatherCheck.addEventListener("change", changeWeather);
greetingCheck.addEventListener("change", changeGreeting);
quotesCheck.addEventListener("change", changeQuotes);
timeDateCheck.addEventListener("change", changeTimeAndDate);

function changePlayer() {
  if (playerCheck.checked === false) {
    player.style.display = "none";
  } else {
    player.style.display = "block";
  }
  localStorage.setItem("isPlayerEnabled", playerCheck.checked)
}

function changeWeather() {
  if (weatherCheck.checked === false) {
    weather.style.display = "none";
  } else {
    weather.style.display = "flex";
  }
  localStorage.setItem("isWeatherEnabled", weatherCheck.checked)
}

function changeGreeting() {
  if (greetingCheck.checked === false) {
    greeting.style.display = "none";
  } else {
    greeting.style.display = "block";
  }
  localStorage.setItem("isGreetingEnabled", greetingCheck.checked)
}

function changeQuotes() {
  if (quotesCheck.checked === false) {
    quotes.style.display = "none";
  } else {
    quotes.style.display = "block";
  }
  localStorage.setItem("isTQuotesEnabled", quotesCheck.checked)
}

function changeTimeAndDate() {
  if (timeDateCheck.checked === false) {
    time.style.display = "none";
    date.style.display = "none";
  } else {
    time.style.display = "block";
    date.style.display = "block";
  }
  localStorage.setItem("isTimeEnabled", timeDateCheck.checked)
}

load();

function load() {
  if (localStorage.getItem('isTimeEnabled') == null) {
    localStorage.setItem("isTimeEnabled", "true");
    localStorage.setItem("isTQuotesEnabled", "true");
    localStorage.setItem("isGreetingEnabled", "true");
    localStorage.setItem("isWeatherEnabled", "true");
    localStorage.setItem("isPlayerEnabled", "true");
  }
  weatherCheck.checked = localStorage.getItem('isTimeEnabled') === "true";
  weatherCheck.dispatchEvent(new Event("change"));

  quotesCheck.checked = localStorage.getItem('isTQuotesEnabled') === "true";
  quotesCheck.dispatchEvent(new Event("change"));

  greetingCheck.checked = localStorage.getItem('isGreetingEnabled') === "true";
  greetingCheck.dispatchEvent(new Event("change"));

  playerCheck.checked = localStorage.getItem('isPlayerEnabled') === "true";
  playerCheck.dispatchEvent(new Event("change"));

  timeDateCheck.checked = localStorage.getItem('isTimeEnabled') === "true";
  timeDateCheck.dispatchEvent(new Event("change"))

}

