'using strict';

const _ = require('lodash');

class TreeIterate {
  constructor(tree) {
    this._tree = tree;
    this.reset();
  }

  _setCurrent(name) {
    if (_.isNil(name)) {
      this._current = null;
      return this._current;
    }
    this._current = this._unprocessed[name];
    _.unset(this._unprocessed, name);

    _.forEach(this._current.childs, (value) => {
      let childNode = this._unprocessed[value];
      childNode.parents = _.filter(childNode.parents, (parent) => parent !== name );
    });
    return this._current;
  }

  _findNoChildNodes() {
    let name = _.findKey(this._unprocessed, (value) => {
      return _.isNil(value.parents);
    });

    return this._setCurrent(name);
  }

  isEnd() {
    return _.isNil(this._current);
  }

  reset() {
    this._unprocessed = _.clone(this._tree);
  }

  next() {
    return this._findNoChildNodes();
  }
}

function iterate(tree) {
  return new TreeIterate(tree);
}

module.exports = iterate;
