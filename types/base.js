'using strict';

const _ = require('lodash');
const error = require('../error');

class BaseType {
  constructor(value) {
    if (_.isNil(value.type)) {
      error.throw.logicError('type is absent!');
    }
    this._type = value.type;
  }

  get resolvedFields() {
    return null;
  }

  get type() {
    return this._type;
  }

//  _append(value) {
//   return _.assign(this, value);
//  }
}

module.exports = BaseType;
