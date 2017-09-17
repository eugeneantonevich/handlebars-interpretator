'use strict';

const _ = require('lodash');
const types = require('../types');
const common = require('../common');

function resolveEnvironment(environment, interpretator, resolver) {
  let tree = common.tree(common.tree.node.make.array(environment, resolver));

  return _.transform(common.tree.transform.toArray(tree), (resolvedEnvironment, nodeName) => {
    let env = types.make.one(environment[nodeName]);

    let resolvedFields = _.transform(env.fieldsToResolve, (res, value, name) => {
      res[name] = resolver(value).resolve(resolvedEnvironment);
    }, {});

    result[node.source] = types.clone(env, resolvedFields);
  }, {});
}

module.exports = {
  resolveEnvironment
};
