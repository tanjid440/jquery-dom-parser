# jquery-dom-parser

Simple HTML DOM parser written in JavaScript for scraping or parsing html strings.

## Installation
`npm install jquery-dom-parser`

## Usage
```
const parseHTML = require('jquery-dom-parser')

const html = '<div class="className">WORKING</div>'

const $ = parseHTML(html)
const value = $('div.className').text()

console.log(value)  //WORKING

```

## Features
1. Only 6 lines of code
2. Lightweight
3. Ultrafast
4. Simple syntax
5. Small memory footprint

## Limitations

1. Custom HTML tags will not work.
2. Dynamic data cannot be parsed.
3. Keep in mind, this is not a browser. So, no styling or JavaScript code will be executed when parsing.
4. Since, this module supports JSDOM, you can enable those execution by tweaking the code. But for the sake of simplicity and performance those are disabled.
