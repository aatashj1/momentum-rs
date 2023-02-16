let quote = document.querySelector(".quote");
let authorQuote = document.querySelector(".author");
let changeQuote = document.querySelector(".change-quote");

async function getQuotes() {
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json();
  return data;
}


function  GetRandomNumber  (min, max)  {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




async function showQuotes (){
  let dataFromJson = await getQuotes();
   let amountOfQuotes = dataFromJson.length-1;
  let randomNum = GetRandomNumber(0,amountOfQuotes);
  quote.textContent = dataFromJson[randomNum].text;
  authorQuote.textContent =  dataFromJson[randomNum].author;
}
showQuotes ();

changeQuote.addEventListener("click", change);

function change () {
  showQuotes ();
}
