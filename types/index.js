/**
 * Created by евгений on 13.09.2017.
 */
'using strict';

const block = require('./block');
const variable = require('./variable');
const equals = require('./equals');
const condition = require('./condition');
const error = require('../error');

const types = {
  block, variable, equals, condition
};

function make(value) {
  if (_.isNil(value.source)) {
    error.throw.invalidFormat('field source is absent');
  }

  let type = types[value.type];
  if (_.isNil(type)) {
    error.throw.invalidFormat('unknown variable type');
  }

  return type(value);
}

function makeTypes(environment) {
  return _.transform(environment, (result, value) => {
    result[value.source] = types.make.one(value);
  }, {});
}

function _clone(variable, resolvedData) {
  return _.assign(_.clone(variable), resolvedData);
}

module.exports = {
  clone: _clone,
  make: {
    one: make,
    array: makeTypes
  },
  types
};
