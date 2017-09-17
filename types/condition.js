'using strict';

const hb = require('../common').hb;
const Base = require('./base');

class Condition extends Base {
  constructor(value) {
    super(value);
    this._name = value.name;
    this._value = value.value;
    this._bodyTrue = value.body_true;
    this._bodyFalse = value.body_false;
  }

  format() {
    return hb.open.begin
      .concat(hb.open.if)
      .concat(hb.delimiter)
      .concat(this._name)
      .concat(hb.close.end)
      .concat(this._bodyTrue)
      .concat(hb.open.begin)
      .concat(hb.else)
      .concat(hb.close.end)
      .concat(this._bodyFalse)
      .concat(hb.open.begin)
      .concat(hb.close.if)
      .concat(hb.close.end);
  }

  get fieldsToResolve() {
    return {
      body_true: this._bodyTrue,
      body_false: this._bodyFalse
    }
  }

}

module.exports = (value) => { return new Condition(value); };
