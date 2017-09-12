'using strict';

const InvalidFormat = require('./invalidFormat');

module.exports = {
  throw: {
    invalidFormat: (error) => { throw new InvalidFormat(error); }
  }
};
