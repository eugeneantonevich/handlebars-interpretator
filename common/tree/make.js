'using strict';

const _ = require('lodash');

/**
  dependences = {
    name1: [ name2, name3 ],
    name2: [ name3, name4 ] ...
  }
*/

function _fillChilds(nodes) {
  return _.transform(nodes, (result, dep) => {
    _.forEach(dep.parents, (parent) => {
      result[parent].push(dep.name);
    });
  }, nodes);
}

function _constructTree(nodes) {
  return _fillChilds(
    _.transform(nodes, (result, node) => {
      result[node.name] = node;
    }, {}));
}

/**
 *
 * @param nodes
 * nodes (@Array)
 */

function tree(nodes) {
  return _constructTree(nodes);
}

module.exports = tree;
