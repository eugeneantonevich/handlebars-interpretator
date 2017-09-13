'using strict';

const common = require('../common');

class Variable {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  format() {
    return common.open.concat(this._name).concat(common.close);
  }
}

module.exports = (name) => { return new Variable(name); };
