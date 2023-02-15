
const time = document.querySelector('.time');
const date = document.querySelector('.date');

function showDate() {
  const dataNew = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  date.textContent = dataNew.toLocaleDateString('en-GB', options);
}

function showTime() {
  const date = new Date();
  time.textContent = date.toLocaleTimeString();
  setTimeout(showTime, 1000);
  showDate();
}

showTime();

let greeting = document.querySelector(".greeting");
let name = document.querySelector(".name");


function getTimeOfDay() {
  const dateGreeting = new Date();
  const hours = dateGreeting.getHours();
  if (hours >= 1 && hours <= 5){
    greeting.textContent =  "Good night, "
  } else if(hours >= 6 && hours <= 11){
    greeting.textContent =  "Good morning, "
  } else if(hours >=  12 && hours <= 17){
    greeting.textContent =  "Good afternoon, "
  } else if(hours >= 18 && hours <= 24){
    greeting.textContent =  "Good evening, "
  } return greeting.textContent;
}
getTimeOfDay();



function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);