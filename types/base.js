'using strict';

const _ = require('lodash');
const error = require('../error');

class BaseType {
  constructor(value) {
    if (_.isNil(value.type)) {
      error.throw.logicError('type is absent!');
    }
    this._type = value.type;
    this._variable = true;
    this._source = value.source;
  }

  get fieldsToResolve() {
    return null;
  }

  get type() {
    return this._type;
  }

  get source() {
    return this._source;
  }
}

module.exports = BaseType;
