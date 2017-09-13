'using strict';

class Block {
  constructor(text) {
    this._text = text;
  }

  get text() {
    return this._text;
  }

  format() {
    return this._text;
  }
}

module.exports = (text) => { return new Block(text); };
