'using strict';

class LogicError extends Error {
  constructor(error) {
    super('Logic error exteption: '.concat(error));
  }
}

module.exports = LogicError;
