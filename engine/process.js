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

function process(environment, text, interpretator, resolver) {
  let _resolver = resolver(text);
  return _resolver.process();

    switch (variable.type) {
      case 'variable':
        textRef = resolver.resolve(text, startWordPos, interpretator.variable.do(variable));
        break;
      case 'text':
        textRef = process(environment, text, interpretator, resolver);
        break;
      default:

    }

  return textRef;
}

module.exports = process;
