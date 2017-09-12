'use strict';

const resolvers = require('./resolvers');
const processing = require('./processing');
const handlebars = require('./handlebars');

function resolveHtml(text, environment) {
  console.log('lib start!');
  processing.resolve(environment, text, handlebars.interpretator(), resolvers.textResolver());
}

module.exports = {
  resolveHtml
};
