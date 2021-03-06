const quoteContainer = document.getElementById('quote-container');
const authorText = document.getElementById('author');
const quoteText = document.getElementById('quote');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];
//Show loader
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
//Hide loader
function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

//Show New Quote
function newQuote() {
    loading();
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author;
    }
    if (quote.text.length >50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
        quoteText.textContent = quote.text;
        complete();
}
//Get Quotes from API
async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    } catch (error) {
        console.log('There is a problem')
    }
}

//TweetQuote
function twitterQuote(){
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -  ${authorText.textContent}`;
    window.open(twitterURL, '_blank');
}

//Event Listeners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', twitterQuote);

// On Load
getQuotes();
