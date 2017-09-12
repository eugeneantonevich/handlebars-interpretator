'use strict';

const TextResolver = require('./textResolver');

module.exports = { textResolver: () => { return new TextResolver(); } };
