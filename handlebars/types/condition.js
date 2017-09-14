'using strict';

const common = require('../common');

class Condition {
  constructor(value) {
    this._name = value.name;
    this._value = value.value;
    this._bodyTrue = value.body_true;
    this._bodyFalse = value.body_false;
  }

  format() {
    return common.open.begin
      .concat(common.open.if)
      .concat(common.delimiter)
      .concat(this._name)
      .concat(common.close.end)
      .concat(this._bodyTrue)
      .concat(common.open.begin)
      .concat(common.else)
      .concat(common.close.end)
      .concat(this._bodyFalse)
      .concat(common.open.begin)
      .concat(common.close.if)
      .concat(common.close.end);
  }
}

module.exports = (value) => { return new Condition(value); };
