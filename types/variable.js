'using strict';

const Block = require('./block');
const types = require('./types');

class Variable extends Block {
  constructor(name) {
    super(types.variable);
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

module.exports = Variable;
