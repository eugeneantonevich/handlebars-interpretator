'use strict';

const _ = require('lodash');
const types = require('../types');
const common = require('../common');
const resolvers = require('../resolvers');

function resolveEnvironment(environment, resolver) {
  let envs = types.make.array(environment);

  let nodes = _.transform(envs, (result, value, name) => {
    result.push(common.tree.node.make.one(resolvers.type(value, resolver).all, [], name));
  }, []);

  let tree = common.tree(nodes);

  return _.transform(common.tree.transform.toArray(tree), (resolvedEnvironment, nodeName) => {
    resolvedEnvironment[nodeName] = resolvers.type(envs[nodeName], resolver).resolve(resolvedEnvironment);
  }, {});
}

module.exports = {
  resolveEnvironment
};
