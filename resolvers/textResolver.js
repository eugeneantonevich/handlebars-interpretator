'using strict';

class TextResolver {

  constructor() {
    this._closeWord = '>>';
    this._openWord = '<<';
  }

  get openWord() {
    return this._openWord;
  }

  get closeWord() {
    return this._closeWord;
  }

  resolve(text, position, target) {
    console.log('resolve from position '.concat(position).concat(' on ').concat(target));
    return text;
  }
}

module.exports = TextResolver;
