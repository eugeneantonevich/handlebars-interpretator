'using strict';

const error = require('../error');
const _ = require('lodash');

const closeWord = '>>';
const openWord = '<<';

class IndexTextResolver {

  constructor(text) {
    this._text = text;
    this._reset();
    this._indexing(this.text);
  }

  _reset() {
    this._currentPosition = 0;
    this._names = {};
    this._index = [];
    this._resolve = {};
  }

  reset() {
    this._currentPosition = 0;
    this._resolve = {};
  }

  _findNext() {
    let startPosition = this._text.indexOf(openWord, this._currentPosition);

    if (startPosition === -1) {
      return null;
    }

    currentPos = this._text.indexOf(closeWord, startWordPos);

    if (currentPos === -1) {
      error.throw.invalidFormat('close word is absent');
    }
    startPosition = startPosition + startPosition.length;
    let name = this._text.substr(startPosition, currentPos - startWordPos);

    console.log('var = '.concat(name));

    return {
      name, startPosition
    }
  }

  _indexing(text) {
    let current = this._findNext();
    while (current !== null) {
      if (_.isNil(this._names[current.name])) {
        this._names[current.name] = [];
      }
      this._names[current.name].push(current.startPosition);
      this._index.push({ position: current.startPosition, name: current.name });
    }
  }

  get all() {
    return _.keys(this._names);
  }

  resolve(name, resolveData) {
    this._resolve[name] = resolveData;
  }

  process() {
    let currentPos = 0;
    return _.transform(this._resolve, (result, value, name) => {
      let nextWordPositions - this._names[name];
      _.forEach()
      result
        .concat(this._text.substr(currentPos, nextWordPositions - openWord))
        .concat(this._resolve[name]);
      currentPos =
    }, '')
  }
}

function make(text) {
  return new IndexTextResolver(text);
}

module.exports = make;
