export default class DataContainer {
  data = {currentLanguage: 'en', dataJson: ""};
  async getDataJsonPromise() {
    const dataJson = 'data.json';
    let dataFromFile = await fetch(dataJson);
    return dataFromFile.json();
  }

  UserChooseRussian() {
    if (this.data.currentLanguage === "ru") //todo: dont work
      return;
    this.data.currentLanguage = "ru";
  }

  UserChooseEnglish() {
    if (this.data.currentLanguage === "en")
      return;
    this.data.currentLanguage = "en";
  }
}
