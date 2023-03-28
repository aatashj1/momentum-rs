import Randomizer from "./randomizer.js";

const body = document.body;
const amountOfImages = 20;

const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");


slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
let randomNum = new Randomizer().getRandomNumber(1, amountOfImages);


function setBg() {
  let timeOfDay = getTimeOfDay();
  let bgNum = 0;
  bgNum = String(randomNum).padStart(2, '0');
  let img = new Image();
  img.src = `https://raw.githubusercontent.com/aatashj1/momentum-rs/master/assets/bg/${timeOfDay}/${bgNum}.jpg`;
  body.style.backgroundImag = img.src;
  img.onload = () => {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/aatashj1/momentum-rs/master/assets/bg/${timeOfDay}/${bgNum}.jpg')`;
  };
}

function getSlideNext() {
  randomNum++;
  if (randomNum > amountOfImages) {
    randomNum = 1;
  }
  setBg();
}

function getSlidePrev() {
  randomNum--;
  if (randomNum < 1) {
    randomNum = 20;
  }
  setBg();
}

setBg();


function getTimeOfDay() {
  const dateGreeting = new Date();
  const hours = dateGreeting.getHours();
  let timeOfDay = "";
  if (hours >= 0 && hours <= 5) {
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




