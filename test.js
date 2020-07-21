const parseHTML = require('./parser.js')

const html = '<div class="className">=====>> WORKING <<=====</div>'

const $ = parseHTML(html)
const value = $('div.className').text()

console.log()
console.log(value)
console.log()
