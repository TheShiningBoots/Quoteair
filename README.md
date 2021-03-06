<div id="header" align="center">
  <img src="https://raw.githubusercontent.com/TheShiningBoots/Quoteair/master/.github/images/Project_Logo.png" width="90" height="90"/>
  <br><br></div>
<img src="https://raw.githubusercontent.com/TheShiningBoots/Quoteair/master/.github/images/rainbow.png"/>


- [What is? and Why?](#what-is-and-why)
- [Intstallation](#intstallation)
- [Usage](#usage)
- [getRandomQuote()](#getrandomquote)
- [getRandomQuote(false)](#getrandomquotefalse)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)
  
<img src="https://raw.githubusercontent.com/TheShiningBoots/Quoteair/master/.github/images/rainbow.png"/><br><br><br>

## What is? and Why?
Quoteair is a free to use npm package developed by '[TheShiningBoots](https://github.com/TheShiningBoots)' it aims at providing a HUGE library of quotes, currently at 3500+, to be used in APIs or Applications.

<img src="https://raw.githubusercontent.com/TheShiningBoots/Quoteair/master/.github/images/rainbow.png"/><br><br><br>

## Intstallation

**Quoteair** can be installed through the npm registry via the following command <br>

``npm i quoteair``<br>

The package can also be downloaded directly via github by adding the following line of code to your `dependencies` in your `package.json`

``"Quoteair": "TheShiningBoots/Quoteair"`` for example -
```json
"dependencies": {
    "Quoteair": "TheShiningBoots/Quoteair"
}
```
For more information regarding the above visit [npm's official documentation](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#github-urls) <br><br>
<img src="https://raw.githubusercontent.com/TheShiningBoots/Quoteair/master/.github/images/rainbow.png"/><br><br><br>

## Usage

**Quoteair** can be used for various applications whether it be APIs or applications. An example has been given in the examples folder, that example is also given below.
<br><br>
```js
const quoteair = require('quoteair');

// Outputs the quote with the author 
console.log(quoteair.getRandomQuote())

// Outputs the quote without the author
console.log(quoteair.getRandomQuote(false))
```
<br><br>
<img src="https://raw.githubusercontent.com/TheShiningBoots/Quoteair/master/.github/images/rainbow.png"/><br><br><br>

## getRandomQuote()
Outputs the quote and author as a json format
```
{
    'quote': 'A random quote',
    'author': 'The author of the quote'
}
```
<img src="https://raw.githubusercontent.com/TheShiningBoots/Quoteair/master/.github/images/rainbow.png"/><br><br><br>

## getRandomQuote(false)
Outputs the quote as plain text, ***Does not include the author*
```text
quote
```
<img src="https://raw.githubusercontent.com/TheShiningBoots/Quoteair/master/.github/images/rainbow.png"/><br><br><br>

## Contributing
Contribution are very significant and are really welcome, to contribute you may open a pull request and get it merged with the main branch, depending on what type of changes you are making you must include it in the pull request, common topics may include but are not limited to ``addition of new quotes`` and ``optimizations``. To learn more about each please read [Contributing.md](https://github.com/TheShiningBoots/Quoteair/tree/master/.github/CONTRIBUTING.md)
<img src="https://raw.githubusercontent.com/TheShiningBoots/Quoteair/master/.github/images/rainbow.png"/><br><br><br>

## Credits
This project has only been possible through the help of various open-source projects though it would be impossible for me to list them all, most of them were found using the `quotes and the quotes-api` tags on github.
<img src="https://raw.githubusercontent.com/TheShiningBoots/Quoteair/master/.github/images/rainbow.png"/><br><br><br>

## License
The license file of the software can be found in the root directory its the GPL-3 License.



