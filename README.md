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
>> Only 6 lines of code
>> Lightweight
>> Ultrafast
>> Simple syntax
>> Small memory footprint

## Limitations

>> Custom HTML tags will not work.
>> Dynamic data cannot be parsed.
>> Keep in mind, this is not a browser. So, no styling or JavaScript code will be executed when parsing.
>> Since, this module supports JSDOM, you can enable those execution by tweaking the code. But for the sake of simplicity and performance those are disabled.
