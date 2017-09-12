'using strict';

class Block {
  constructor(t) {
    this._type = t;
  }

  get type() {
    return this._type;
  }

}

module.exports = Block;
