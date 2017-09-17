'using strict';

const _ = require('lodash');
const iterator = require('./iterator');

function toArray(tree) {
  let it = iterator(tree);

  let result = [];
  it.next();
  while(!it.isEnd()) {
    result.push(it.current.source);
    it.next();
  }
  return result;
}

module.exports = {
  toArray
};
