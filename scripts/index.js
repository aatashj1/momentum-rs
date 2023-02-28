import {getWeather} from "./weather.js";
import DataContainer from "./dataContainer.js";
import Quotes from "./quotes.js";
import MainInfo from "./mainInfo.js";
import SettingState from "./settingsState.js";


let langRu = document.querySelector('.rus');
let langEng = document.querySelector('.eng');

export let dataContainer = new DataContainer();

dataContainer.getDataJsonPromise().then(result => {
  dataContainer.data.dataJson = result;
  getWeather(dataContainer.data, dataContainer.data.currentLanguage).then();

  let quotes = new Quotes(dataContainer.data);
  let mainInfo = new MainInfo(dataContainer.data);
  let setting = new SettingState(dataContainer.data);

  langRu.addEventListener('click', () => {
    if (!dataContainer.UserChooseRussian())
      return;
    mainInfo.getTimeOfDay(dataContainer.data.dataJson, dataContainer.data.currentLanguage);
    mainInfo.showTime(dataContainer.data.currentLanguage);

    quotes.changeQuote(dataContainer.data);
    getWeather(dataContainer.data, dataContainer.data.currentLanguage).then();
    mainInfo.changePlaceholder(dataContainer.data.dataJson.namePlaceholder.ru);
    setting.translate(dataContainer.data.dataJson, dataContainer.data.currentLanguage);
  });
  langEng.addEventListener('click', () => {
    if (!dataContainer.UserChooseEnglish())
      return;
    mainInfo.getTimeOfDay(dataContainer.data.dataJson, dataContainer.data.currentLanguage);
    mainInfo.showTime(dataContainer.data.currentLanguage);
    quotes.changeQuote(dataContainer.data);
    getWeather(dataContainer.data, dataContainer.data.currentLanguage).then();
    mainInfo.changePlaceholder(dataContainer.data.dataJson.namePlaceholder.en);
    setting.translate(dataContainer.data.dataJson, dataContainer.data.currentLanguage);
  });
});










