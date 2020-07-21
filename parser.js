const { JSDOM } = require("jsdom");

function parseHTML(html) {
  const dom = new JSDOM(html);
  const parsed = (require('jquery'))(dom.window);
  return parsed;
}

module.exports = parseHTML;
