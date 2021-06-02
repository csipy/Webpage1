const quoteContainer = document.getElementById('quote-container');
const authorText = document.getElementById('author');
const quoteText = document.getElementById('quote');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');



let apiQuotes= [];

//Show New Quote
function newQuote() {
    //Pick a random quote from apiQuotes array
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
authorText.textContent = quote.author;
quoteText.textContent = quote.text;
}
//Get Quotes from API
async function getQuotes() {
    const apiUrl= 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes =await response.json();
        newQuote();

    } catch (error) {
        console.log('There is a problem')
    }
}
// On Load
getQuotes();
