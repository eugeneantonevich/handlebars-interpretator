'use strict';

const _ = require('lodash');
const error = require('../error');

/*
  environment - sink of variables
    env_variable_name: {
      type: variable,
      name: input_value_name
    }
    resolve => {{input_value_name}}

    env_block_name: {
      type: text,
      text: some text
    }
    resolve => insert text and resolve itself

    env_condition_name: {
      type: condition,
      condition: <text>
      true: some text
      false: some text
    }

  interpretator - object generate text
*/

function resolve(environment, text, interpretator, resolver) {
  let textRef = text;
  let currentPos = 0;
  let startWordPos = 0;
  while (currentPos !== -1) {
    startWordPos = text.indexOf(resolver.openWord, currentPos);
    if (startWordPos === -1) {
      continue;
    }

    currentPos = text.indexOf(resolver.closeWord, startWordPos);

    if (currentPos === -1) {
      error.throw.invalidFormat('close word is absent');
    }

    let name = text.substr(startWordPos, currentPos - startWordPos);

    console.log('var = '.concat(name));

    let variable = environment[name];

    if (_.isNil(variable) || _.isNil(variable.type)) {
      error.throw.invalidFormat('name '.concat(name).concat('is absent'));
    }

    switch (variable.type) {
      case 'variable':
        textRef = resolver.resolve(text, startWordPos, interpretator.variable.do(variable));
        break;
      case 'text':
        textRef = resolve(environment, text, interpretator, resolver);
        break;
      default:

    }

    return textRef;
  }
}

module.exports = resolve;
