export default class SettingState {
  playerText;
  weatherText;
  greetingText;
  quotesText;
  timeText;
  todoText;
  apiText;

  constructor(data) {


    this.playerText = document.querySelector(".player-check");
    this.weatherText = document.querySelector(".weather-check");
    this.greetingText = document.querySelector(".greeting-check");
    this.quotesText = document.querySelector(".quotes-check");
    this.timeText = document.querySelector(".time-check");
    this.todoText = document.querySelector(".todo-check");
    this.apiText = document.querySelector(".api-text");

    this.translate(data.dataJson, data.currentLanguage);

    let openButton = document.querySelector(".sett-main-button");
    let settingsBlock = document.querySelector(".settings");
    let closeButton = document.querySelector(".close-sett-button");
    closeButton.addEventListener("click", closeSettingsBlock);
    openButton.addEventListener("click", openSettingsBlock);

    function openSettingsBlock() {
      openButton.style.display = "none";
      settingsBlock.style.display = "flex";
    }
    function  closeSettingsBlock() {
      openButton.style.display = "flex";
      settingsBlock.style.display = "none";
    }

  }



  translate(dataJson, language){
    let settingsTextFromJson = dataJson.setting[language];
    this.playerText.textContent = settingsTextFromJson.player;
    this.weatherText.textContent = settingsTextFromJson.weather;
    this.greetingText.textContent = settingsTextFromJson.greeting;
    this.quotesText.textContent = settingsTextFromJson.quote;
    this.timeText.textContent = settingsTextFromJson.time;
    this.todoText.textContent = settingsTextFromJson.todo;
    this.apiText.textContent = settingsTextFromJson.photoSource;
  }

}