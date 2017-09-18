'using strict';

const error = require('../error');
const _ = require('lodash');
const types = require('../types');

class TypeResolver {

  constructor(value, resolver) {
    this._value = value;
    this._resolver = resolver;
  }

  _getUniqueVariables(fields) {
    return _.transform(fields, (result, value) => {
      result.intersect = _.concat(result.intersect, _.union(result.intersect, this._resolver(value).all));
    }, { intersect: [] }).intersect;
  }

  get all() {
    return this._getUniqueVariables(this._value.all);
  }

  resolve(environment) {
    let resolved = _.transform(this._value.fieldsToResolve, (res, value, name) => {
      res[name] = this._resolver(value).resolve(environment);
    }, {});

    return types.clone(this._value, resolved);
  }
}

function factory(value, resolver) {
  if (!types.isType(value)) {
    error.throw.logicError('type resolver process only type struct');
  }
  if (_.isNil(resolver)) {
    error.throw.logicError('for resolve types datasource resolver required');
  }
  return new TypeResolver(value, resolver);
}

module.exports = factory;
