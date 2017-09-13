'using strict';

const common = require('../common');

class Variable {
  constructor(value) {
    this._name = value.name;
  }

  get name() {
    return this._name;
  }

  format() {
    return common.open.begin.concat(this._name).concat(common.close.end);
  }
}

module.exports = (name) => { return new Variable(name); };
