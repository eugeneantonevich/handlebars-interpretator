'using strict';

const _ = require('lodash');

/**
  dependences = {
    name1: [ name2, name3 ],
    name2: [ name3, name4 ] ...
  }
*/

function resolve(dependences) {
  _.transform(dependences, (result, value, key) => {
    _.forEach(value, (v) => {
      if (_.isNil(result[v])) {
        result[v] = [];
      }
      result[v].push(key);
    });
  });
}

module.exports = resolve;
