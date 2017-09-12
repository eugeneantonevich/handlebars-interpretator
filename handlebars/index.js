'using strict';

const Interpretator = require('./interpretator');

module.exports = { interpretator: () => { return new Interpretator(); } };
