# jquery-html-parser

Don't want to blow up your package.json file with a hell lots of dependencies? This small parser can help you.
 Keep in mind that scraping data is always considered to be in the grey side. May be you have a small project where 
you just want to show some data scrapped from web or you want to inject some data in your own html, this lightweight parser 
can come in handy in those cases.

## Installation
```
npm install jquery-html-parser
```

## Usage
```
const parseHTML = require('jquery-html-parser')

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
6. Depends on 2 packages

## Limitations

1. Custom HTML tags will not work.
2. Dynamic data cannot be parsed.
3. Keep in mind, this is not a browser. So, no styling or JavaScript code will be executed when parsing.
4. Since, this module supports JSDOM, you can enable those execution by tweaking the code. But for the sake of simplicity and performance those are disabled.
