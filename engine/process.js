'use strict';

const _ = require('lodash');
const types = require('../types');

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

function makeTypes(environment) {
  return _.transform(environment, (result, value) => {
    let type = types[value.type];
    if (_.isNil(type)) {
      return;
    }
    result[value.source] = type(value);
  }, {});
}

function getUniqueVariables(fields, resolver) {
  return _.transform(fields, (result, value) => {
    result.intersect = _.union(result.intersect, resolver(value).all);
  }, { intersect }).intersect;
}

function typesToLayer(environment, resolver) {
  _.transform(environment, (result, value, key) => {
    let variables = getUniqueVariables(value.resolvedFields);

  }, []);
}

function process(environment, text, interpretator, resolver) {
  let tree = typesToTree(makeTypes(environment));

  return resolver(text).resolve(interpretator.process(environment));
}

module.exports = process;
