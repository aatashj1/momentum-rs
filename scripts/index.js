import {getWeather} from "./weather.js";
import DataContainer from "./dataContainer.js";
import Quotes from "./quotes.js";
import MainInfo from "./mainInfo.js";

let langRu = document.querySelector('.rus');
let langEng = document.querySelector('.eng');

let dataContainer = new DataContainer();
getWeather(dataContainer.data.currentLanguage).then();

dataContainer.getDataJsonPromise().then(result=>{
  dataContainer.data.dataJson = result;
  let quotes = new Quotes(dataContainer.data);

  let mainInfo = new MainInfo(dataContainer.data);

  langRu.addEventListener('click', ()=>{
    dataContainer.UserChooseRussian();
    mainInfo.getTimeOfDay(dataContainer.data.dataJson, dataContainer.data.currentLanguage);
    mainInfo.showTime(dataContainer.data.currentLanguage);

    quotes.changeQuote(dataContainer.data);
    getWeather(dataContainer.data.currentLanguage).then();
  });
  langEng.addEventListener('click', ()=>{
    dataContainer.UserChooseEnglish();
    mainInfo.getTimeOfDay(dataContainer.data.dataJson, dataContainer.data.currentLanguage);
    mainInfo.showTime(dataContainer.data.currentLanguage);
    quotes.changeQuote(dataContainer.data);
    getWeather(dataContainer.data.currentLanguage).then();
  });
});










