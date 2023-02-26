export default class MainInfo {

  time;
  date;
  greeting;
  name;

  constructor(data) {
    this.time = document.querySelector('.time-date');
    this.date = document.querySelector('.date');
    this.greeting = document.querySelector(".greeting");
    this.name = document.querySelector(".name");

    window.addEventListener('beforeunload', ()=>this.setLocalStorage());
    this.getLocalStorage();
    this.showTime(data.currentLanguage);
    this.getTimeOfDay(data.dataJson, data.currentLanguage);
  }


  intervalEntity = {timerId: -1, language: "en"};
 changePlaceholder(placeholderText){
   this.name.placeholder = placeholderText;
 }
  _showDate() {
    const dataNew = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    this.date.textContent = dataNew.toLocaleDateString([this.intervalEntity.language], options);
  }

  showTime(language) {
    clearInterval(this.intervalEntity.timerId);
    this.intervalEntity.timerId = setInterval(() => {
      this.intervalEntity.language = language;
      const date = new Date();
      this.time.textContent = date.toLocaleTimeString();
      this._showDate();
    }, 50);
    // clearTimeout(this.timerEntity.timer);
  }


  getTimeOfDay(dataJson, language) {
    const dateGreeting = new Date();
    const hours = dateGreeting.getHours();
    let greetingTextFromJson = dataJson.greetings[language];

    if (hours >= 0 && hours <= 5) {
      this.greeting.textContent = greetingTextFromJson[0].text;
    } else if (hours >= 6 && hours <= 11) {
      this.greeting.textContent = greetingTextFromJson[1].text;
    } else if (hours >= 12 && hours <= 17) {
      this.greeting.textContent = greetingTextFromJson[2].text;
    } else if (hours >= 18 && hours <= 24) {
      this.greeting.textContent = greetingTextFromJson[3].text;
    }
    return this.greeting.textContent;
  }


  setLocalStorage() {
    console.log(this.name);
    localStorage.setItem('name', this.name.value);
  }

  getLocalStorage() {
    if (localStorage.getItem('name')) {
      this.name.value = localStorage.getItem('name');
    }
  }

}