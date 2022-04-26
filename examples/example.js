const quoteair = require("../src/quoteair");

// Outputs the quotes as json with the author
console.log(quoteair.getRandomQoute());

// Outputs the quote as text without the author
console.log(quoteair.getRandomQoute(false))