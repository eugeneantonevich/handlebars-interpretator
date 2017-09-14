'using strict';

const InvalidFormat = require('./invalidFormat');
const LogicError = require('./logicError');

module.exports = {
  throw: {
    invalidFormat: (error) => { throw new InvalidFormat(error); },
    logicError: (error) => { throw new LogicError(error); }
  }
};
