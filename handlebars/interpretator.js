'using strict';

const _ = require('lodash');
const types = require('../types');

function one(environment, name) {
  let value = environment[name];
  if (_.isNil(value)) {
    return null;
  }

  let formatter = types[value.type];
  if (_.isNil(formatter)) {
    return null;
  }

  return formatter(value).format();
}

function all(environment) {
  return _.transform(environment, (result, value) => {
    let res = one(environment, value);
    if (res) {
      result[value.source] = res;
    }
  }, {});
}

module.exports = {
  process: {
    all, one
  }
};
