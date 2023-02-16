const body = document.body;
const amountOfImages = 20;

let slideNext = document.querySelector(".slide-next");
let slidePrev = document.querySelector(".slide-prev");


slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
let randomNum = GetRandomNumber(1, amountOfImages);


function getSlideNext(){
  randomNum++;
  if(randomNum > amountOfImages){
    randomNum = 1;
  }
  setBg();
}

function getSlidePrev(){
  randomNum--;
  if(randomNum < 1){
    randomNum = 20;
  }
  setBg();
}

setBg();


function  GetRandomNumber  (min, max)  {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
  bgNum = String(randomNum).padStart(2, '0');
  let img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  console.log(img.src);
  body.style.backgroundImag = img.src;
  img.onload = () => {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    console.log(body.style.backgroundImage);
  };
}
