export default class DataContainer {
  data = {currentLanguage: 'en', dataJson: ""};
  async getDataJsonPromise() {
    const dataJson = 'data.json';
    let dataFromFile = await fetch(dataJson);
    return dataFromFile.json();
  }

  UserChooseRussian() {
    if (this.data.currentLanguage === "ru") //todo: dont work
      return false;
    this.data.currentLanguage = "ru";
    return true;
  }

  UserChooseEnglish() {
    if (this.data.currentLanguage === "en")
      return false;
    this.data.currentLanguage = "en";
    return true;
  }
}
