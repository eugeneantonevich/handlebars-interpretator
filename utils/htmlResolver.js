'use strict';

const _ = require('lodash');

const openWord = '<<';
const closeWord = '>>';

function resolve(environment, html) {
  let startPos = 0;
  let startWordPos = 0;
  while (startWordPos !== -1) {
    startWordPos = html.indexOf(openWord);
    if (startWordPos === -1) {
      continue;
    }
    let closeWordPos = html.indexOf(closeWord, startWordPos);
    if (startWordPos === -1) {
      throw new Error('invalid input html format');
    }

    let variable = html.substr(startWordPos, closeWordPos - startWordPos);
    
  }
}

module.exports = resolve;
