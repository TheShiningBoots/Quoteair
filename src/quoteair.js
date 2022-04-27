const data = require('../db/quotes.json')

let processedQuote = {};

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  module.exports.getRandomQuote = function (type) {
    let index = randomInt(0, data.length);
    switch (type) {
      case false:
        return data[index].quote;
      default:
        processedQuote.quote = data[index].quote;
        processedQuote.author = data[index].author;
        return processedQuote;
    }
  };