'using strict';

const hb = require('../common').hb;
const Base = require('./base');

class Equals extends Base {
  constructor(value) {
    super(value);
    this._name = value.name;
    this._value = value.value;
    this._body = value.body;
  }

  format() {
    return hb.open.begin
      .concat(hb.open.eq)
      .concat(hb.delimiter)
      .concat(this._name)
      .concat(hb.delimiter)
      .concat(hb.open.compare)
      .concat(this._value)
      .concat(hb.close.compare)
      .concat(hb.close.end)
      .concat(this._body)
      .concat(hb.open.begin)
      .concat(hb.close.eq)
      .concat(hb.close.end);
  }

  get fieldsToResolve() {
    return {
      body: this._body
    };
  }
}

module.exports = (value) => { return new Equals(value); };
