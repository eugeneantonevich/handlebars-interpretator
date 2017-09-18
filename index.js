'use strict';

const resolvers = require('./resolvers');
const engine = require('./engine');
const interpretators = require('./interpretator');

function resolveHtml(text, environment) {
  let interpretator = interpretators.handlebars;
  let textResolver = resolvers.datasource.text;

  let resolvedEnvironment =
    engine.preprocess.resolveEnvironment(environment, textResolver);
  return engine.process(resolvedEnvironment, text, interpretator, textResolver);
}

module.exports = {
  resolveHtml
};
