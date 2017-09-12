'use strict';

const _ = require('lodash');
const types = require('../structs');

const openWord = '<<';
const closeWord = '>>';

function resolve(environment, text, values) {
  let currentPos = 0;
  let startWordPos = 0;
  while (startWordPos !== -1) {
    startWordPos = text.indexOf(openWord, currentPos);
    if (startWordPos === -1) {
      continue;
    }

    let closeWordPos = text.indexOf(closeWord, startWordPos);

    currentPos = closeWordPos;

    if (startWordPos === -1) {
      throw new Error('invalid input html format');
    }

    let name = text.substr(startWordPos, closeWordPos - startWordPos);
    let variable = environment[name];

    if (_.isNil(variable)) {
      throw new Error('parameter '.concat(name).concat(' absent in environment'));
    }

    switch (variable) {
      case types.variable:

        break;
      default:

    }
  }
}

module.exports = resolve;
