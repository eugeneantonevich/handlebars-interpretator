'using strict';

const _ = require('lodash');
const types = require('../../types');
const error = require('../../error');

function one(value) {
  if (!types.isType(value)) {
    error.throw.logicError('interpretator can process only types struct');
  }
  return value.format();
}

function array(environment) {
  return _.transform(environment, (result, value) => {
    result[value.source] = one(value);
  }, {});
}


module.exports = {
  one, array
};
