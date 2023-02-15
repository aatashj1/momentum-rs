"use strict";
const body = document.body;

let randomNum = (min, max) =>  Math.floor(Math.random() * (max - min + 1)) + min;


function getTimeOfDay() {
  const dateGreeting = new Date();
  const hours = dateGreeting.getHours();
  let timeOfDay = "";
  if (hours >= 1 && hours <= 5) {
    timeOfDay = "night";
  } else if (hours >= 6 && hours <= 11) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours <= 17) {
    timeOfDay = "afternoon";
  } else if (hours >= 18 && hours <= 24) {
    timeOfDay = "evening";
  }
  return timeOfDay;
}

function setBg() {
  let timeOfDay = getTimeOfDay();
  let bgNum = 0;
  bgNum = String(randomNum(1, 20)).padStart(2, '0');
  let img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  console.log(img.src);
  body.style.backgroundImag = img.src;
  img.onload = () => {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    console.log(body.style.backgroundImage);
  };
}

setBg();

let slideNext = document.querySelector(".slide-next");
let slidePrev = document.querySelector(".slide-prev");

function getSlideNext(){

}

function getSlidePrev(){

}