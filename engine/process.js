'use strict';

// const _ = require('lodash');
// const types = require('../types');

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
  return resolver(text).resolve(interpretator.array(environment));
}

module.exports = process;
