const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const authorInput = document.getElementById('author-input');

function fetchRandomQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `- ${data.author}`;
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      quoteText.textContent = 'Failed to fetch quote. Please try again later.';
      quoteAuthor.textContent = '';
    });
}

function searchQuotes() {
  const author = authorInput.value.trim();
  if (author === '') {
    alert('Please enter an author name.');
    return;
  }

  fetch(`https://api.quotable.io/quotes?author=${author}`)
    .then(response => response.json())
    .then(data => {
      if (data.results.length > 0) {
        const randomQuote = data.results[Math.floor(Math.random() * data.results.length)];
        quoteText.textContent = randomQuote.content;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
      } else {
        quoteText.textContent = `No quotes found for author '${author}'.`;
        quoteAuthor.textContent = '';
      }
    })
    .catch(error => {
      console.error('Error searching quotes:', error);
      quoteText.textContent = 'Failed to fetch quotes. Please try again later.';
      quoteAuthor.textContent = '';
    });
}

// Fetch a random quote when the page loads
fetchRandomQuote();
