'use strict';

const resolvers = require('./resolvers');
const engine = require('./engine');
const handlebars = require('./handlebars');

function resolveHtml(text, environment) {
  let interpretator = handlebars.interpretator;
  let textResolver = resolvers.indexTextResolver;

  let resolvedEnvironment =
    engine.preprocess.resolveEnvironment(environment, interpretator, textResolver);

  return engine.process(resolvedEnvironment, text, textResolver);
}

module.exports = {
  resolveHtml
};
