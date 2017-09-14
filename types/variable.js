'using strict';

const hb = require('../common').hb;
const Base = require('./base');

class Variable extends Base {
  constructor(value) {
    super(value);
    this._name = value.name;
  }

  get name() {
    return this._name;
  }

  format() {
    return hb.open.begin.concat(this._name).concat(hb.close.end);
  }
}

module.exports = (name) => { return new Variable(name); };
