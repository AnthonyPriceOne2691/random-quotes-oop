import { quotes } from '../data/quotes.js';
import { MathUtils } from '../utils/MathUtils.js';
import { Quote } from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaAPI() {
    const url = 'https://api.quotable.io/random';
    const options = { headers: { 'Content-Type': 'application/json' } };

    try {
      const response = await fetch(url, options);
      const quote = await response.json();
      return new Quote(quote._id, quote.content, quote.author);
    } catch (error) {
      return console.log(error);
    }
  }
}

export { RandomQuote };
