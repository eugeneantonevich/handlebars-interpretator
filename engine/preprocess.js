'use strict';

const _ = require('lodash');
const types = require('../types');
const common = require('../common');

function resolveEnvironment(environment, interpretator, resolver) {
  let tree = common.tree.make(common.tree.node.make.array(environment, resolver));

  let sortedNodes = common.tree.transform.toArray(tree);

  return _.transform(sortedNodes, (resolvedEnvironment, node) => {
    let env = types.make.one(environment[node.name]);

    let resolvedFields = _.transform(env.fieldsToResolve, (res, value, name) => {
      res[name] = resolver(value).resolve(resolvedEnvironment);
    }, {});

    result[node.name] = types.clone(env, resolvedFields);
  }, {});
}

module.exports = {
  resolveEnvironment
};
