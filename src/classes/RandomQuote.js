import { quotes } from '../data/quotes.js';
import { MathUtils } from '../utils/MathUtils.js';
import { Quote } from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static getRandomQuoteViaAPI() {
    const url = 'https://api.quotable.io/random';

    return fetch(url, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => response.json())
      .then((quote) => new Quote(quote._id, quote.content, quote.author))
      .catch((error) => console.log(error));
  }
}

export { RandomQuote };
