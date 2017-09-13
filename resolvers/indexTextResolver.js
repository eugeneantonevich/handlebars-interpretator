'using strict';

const error = require('../error');
const _ = require('lodash');

const closeWord = '>>';
const openWord = '<<';

class IndexTextResolver {

  constructor(text) {
    this._text = text;
    this._reset();
    this._indexing();
  }

  _reset() {
    this._currentPosition = 0;
    this._names = {};
    this._index = [];
  }

  reset() {
    this._currentPosition = 0;
  }

  _findNext() {
    let startPosition = this._text.indexOf(openWord, this._currentPosition);

    if (startPosition === -1) {
      return null;
    }

    let endWordPosition = this._text.indexOf(closeWord, startPosition);

    if (endWordPosition === -1) {
      error.throw.invalidFormat('close word is absent');
    }

    let startWordPosition = startPosition + openWord.length;
    let endPosition = endWordPosition + closeWord.length;

    this._currentPosition = endPosition;

    let name = this._text.substr(startWordPosition, endWordPosition - startWordPosition);

    return {
      name,
      index: {
        startPosition,
        startWordPosition,
        endPosition
      }
    };
  }

  _indexing() {
    let current = this._findNext();
    while (current !== null) {
      if (_.isNil(this._names[current.name])) {
        this._names[current.name] = [];
      }
      this._names[current.name].push(current.index);
      this._index.push(current);

      current = this._findNext();
    }
  }

  _noResolve(name) {
    return openWord.concat(name).concat(closeWord);
  }

  _resolve(name, resolveData) {
    let resolved = resolveData[name];
    return _.isNil(resolved) ? this._noResolve(name) : resolved;
  }

  get all() {
    return _.keys(this._names);
  }

  /**
    resolveData - map name - value
  */
  resolve(resolveData) {
    let currentPos = 0;
    return _.transform(this._index, (result, value) => {
      result.text = result.text.concat(this._text.substr(currentPos, value.index.startPosition - currentPos),
                            this._resolve(value.name, resolveData));

      currentPos = value.index.endPosition;
    }, { text: '' }).text;
  }
}

function factory(text) {
  return new IndexTextResolver(text);
}

module.exports = factory;
