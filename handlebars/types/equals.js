'using strict';

const common = require('../common');

class Equals {
  constructor(value) {
    this._name = value.name;
    this._value = value.value;
    this._body = value.body;
  }

  format() {
    return common.open.begin
      .concat(common.open.eq)
      .concat(common.delimiter)
      .concat(this._name)
      .concat(common.delimiter)
      .concat(common.open.compare)
      .concat(this._value)
      .concat(common.close.compare)
      .concat(common.close.end)
      .concat(this._body)
      .concat(common.open.begin)
      .concat(common.close.eq)
      .concat(common.close.end);
  }
}

module.exports = (value) => { return new Equals(value); };
