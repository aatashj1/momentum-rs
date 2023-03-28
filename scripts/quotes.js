import Randomizer from "./randomizer.js";


export default class Quotes {
  quoteElement;
  authorQuoteElement;
  changeQuoteButton;

  constructor(data) {
    this.quoteElement = document.querySelector(".quote");
    this.authorQuoteElement = document.querySelector(".author");
    this.changeQuoteButton = document.querySelector(".change-quote");
    this.changeQuoteButton.addEventListener("click", () => this.changeQuote(data));
    this.changeQuote(data);
  }

  changeQuote(data) {
    let quote = this.getQuote(data.dataJson, data.currentLanguage);
    this.quoteElement.textContent = quote.text;
    this.authorQuoteElement.textContent = quote.author;
  }

  getQuote(dataJson, language) {
    let quotesFromJson = dataJson.quotes[language];
    let amountOfQuotes = quotesFromJson.length - 1;
    let randomNum = new Randomizer().getRandomNumber(0, amountOfQuotes);
    return quotesFromJson[randomNum];
  }
}
