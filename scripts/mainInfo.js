export default class MainInfo {

  time;
  date;
  greeting;
  name;

  constructor(data) {
    this.time = document.querySelector('.time');
    this.date = document.querySelector('.date');
    this.greeting = document.querySelector(".greeting");
    this.name = document.querySelector(".name");

    window.addEventListener('beforeunload', this.setLocalStorage);


    this.getLocalStorage();

    this.showTime(data.currentLanguage);

    this.getTimeOfDay(data.dataJson, data.currentLanguage);
  }



 timerEntity = {timer:{}, };

 _showDate(language) {
   const dataNew = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  this.date.textContent = dataNew.toLocaleDateString([language], options);
}

 showTime(language) {
  const date = new Date();
  this.time.textContent = date.toLocaleTimeString();
   console.log("I am timer:"+language);
   this.timer = setTimeout(()=>this.showTime(language), 1000);
   this._showDate(language);
}




  getTimeOfDay(dataJson, language) {
  const dateGreeting = new Date();
  const hours = dateGreeting.getHours();
  let greetingTextFromJson = dataJson.greetings[language];

  if (hours >= 0 && hours <= 5){
    this.greeting.textContent = greetingTextFromJson[0];
  } else if(hours >= 6 && hours <= 11){
    this.greeting.textContent =  greetingTextFromJson[1];
  } else if(hours >=  12 && hours <= 17){
    this.greeting.textContent =  greetingTextFromJson[2];
  } else if(hours >= 18 && hours <= 24){
    this.greeting.textContent =  greetingTextFromJson[3];
  } return this.greeting.textContent;
}




 setLocalStorage() {
  localStorage.setItem('name', this.name.value);
}
 getLocalStorage() {
  if(localStorage.getItem('name')) {
    this.name.value = localStorage.getItem('name');
  }
}

}