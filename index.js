'use strict';

const resolvers = require('./resolvers');
const engine = require('./engine');
const handlebars = require('./handlebars');

function resolveHtml(text, environment) {
  return engine.process(environment, text, handlebars.interpretator(), resolvers.textResolver());
}

module.exports = {
  resolveHtml
};
