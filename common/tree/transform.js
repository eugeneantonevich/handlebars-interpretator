'using strict';

const _ = require('lodash');
const iterator = require('./iterator');

function toArray(tree) {
  let iterator = common.tree.iterate(tree);
  let end = common.tree.iterate();

  let result = [];
  while(iterator.next() !== end) {
    result.push(iterator.name);
  }
  return result;
}

module.exports = {
  toArray
};
