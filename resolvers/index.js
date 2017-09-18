'use strict';

const indexTextResolver = require('./datasource/text');
const type = require('./typeResolver');

module.exports = {
  datasource: {
    text: indexTextResolver
  },
  type
};
